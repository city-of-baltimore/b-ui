import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { Box } from "@mui/material";
import { z } from "zod";

import { ErrorState } from "../components/ErrorState";
import { LoadingState } from "../components/LoadingState";
import { ApiError } from "./api";
import { setRuntimeFormattingDefaults } from "./formatting";
import { setRuntimeDefaultColorMode } from "./colorModeDefaults";
import { normalizeFrontendError, reportFrontendError } from "./frontendErrors";


const localeSchema = z.object({
    code: z.string(),
    label: z.string(),
    direction: z.enum(["ltr", "rtl"]),
});

export const runtimeConfigSchema = z.object({
    product: z.object({
        application: z.object({
            cityName: z.string(),
            title: z.string(),
            subtitle: z.string(),
            headerKicker: z.string(),
            heroEyebrow: z.string(),
        }),
        navigation: z.object({
            homePath: z.string(),
            staffPath: z.string(),
            staffLabel: z.string(),
        }),
        languageAccess: z.object({
            defaultLocale: localeSchema,
            defaultTimeZone: z.string(),
            supportLabel: z.string(),
            email: z.string(),
            phone: z.string(),
        }),
        theming: z.object({
            defaultMode: z.enum(["light", "dark", "system"]),
            modes: z.array(z.enum(["light", "dark", "system"])),
        }),
        surfaces: z.object({
            shellMaxWidthPx: z.number(),
            contentMaxWidthPx: z.number(),
        }),
    }),
    auth: z.object({
        advertiseStaffTools: z.boolean(),
        publicStaffNotice: z.string(),
    }),
    map: z.object({
        engine: z.string(),
        defaultCenter: z.tuple([z.number(), z.number()]),
        defaultZoom: z.number(),
        minZoom: z.number(),
        maxZoom: z.number(),
        maxBounds: z.tuple([
            z.tuple([z.number(), z.number()]),
            z.tuple([z.number(), z.number()]),
        ]),
        styleAssets: z.object({
            glyphsUrl: z.string(),
            clusterLabelFontStack: z.array(z.string()),
        }),
        basemap: z.object({
            provider: z.string(),
            attribution: z.string(),
            light: z.object({
                id: z.string(),
                label: z.string(),
                tileSize: z.number(),
                maxZoom: z.number(),
                tiles: z.array(z.string()),
            }),
            dark: z.object({
                id: z.string(),
                label: z.string(),
                tileSize: z.number(),
                maxZoom: z.number(),
                tiles: z.array(z.string()),
            }),
        }),
        pointDensity: z.object({
            maxRenderedPoints: z.number(),
            clusterThreshold: z.number(),
            clusterRadius: z.number(),
            clusterMaxZoom: z.number(),
        }),
        featureVisibility: z.object({
            pointHydrationZoom: z.number(),
            pointFadeStartZoom: z.number(),
            pointVisibilityZoom: z.number(),
            showPointsWhenAreaSelected: z.boolean(),
            showPointsWhenDetailSelected: z.boolean(),
        }),
        neighborhoodOverlay: z.object({
            defaultVisible: z.boolean(),
            citywideFillOpacity: z.number(),
            detailFillOpacity: z.number(),
            detailOpacityZoom: z.number(),
            selectedOutlineWidth: z.number(),
        }),
        interaction: z.object({
            citywidePadding: z.number(),
            citywideMaxZoom: z.number(),
            areaFocusPadding: z.number(),
            areaFocusMaxZoom: z.number(),
            pointFocusZoom: z.number(),
        }),
        choropleth: z.object({
            classCount: z.number(),
            classingMethod: z.string(),
            noDataLabel: z.string(),
            legendTitle: z.string(),
        }),
        legend: z.object({
            pointTitle: z.string(),
            areaTitle: z.string(),
        }),
        statusColors: z.record(z.string(), z.string()),
    }),
    storyModules: z.array(
        z.object({
            id: z.string(),
            kind: z.string(),
            title: z.string(),
            body: z.string(),
        }),
    ),
    dataset: z.object({
        labels: z.record(z.string(), z.string()),
        table: z.object({
            pageSize: z.number(),
            pageSizeOptions: z.array(z.number()),
        }),
        map: z.object({
            choropleth: z.object({
                defaultMetric: z.string(),
                metrics: z.array(
                    z.object({
                        id: z.string(),
                        label: z.string(),
                        description: z.string(),
                        units: z.string(),
                        formula: z.string(),
                        palette: z.string(),
                    }),
                ),
            }),
            neighborhoodSummary: z.object({
                title: z.string(),
                description: z.string(),
                progressMetric: z.string(),
                topItemCount: z.number(),
            }),
        }),
        detail: z.object({
            sections: z.array(
                z.object({
                    id: z.string(),
                    label: z.string(),
                    fields: z.array(z.string()),
                }),
            ),
        }),
    }),
});

export type RuntimeConfig = z.infer<typeof runtimeConfigSchema>;

const RuntimeConfigContext = createContext<RuntimeConfig | null>(null);


async function fetchRuntimeConfig(): Promise<RuntimeConfig> {
    const response = await fetch("/api/app-config");
    const requestId = response.headers.get("X-Request-ID");
    const json = await readJsonSafely(response);

    if (!response.ok) {
        throw new ApiError(
            "Unable to load the runtime configuration.",
            response.status,
            extractEnvelopeRequestId(json) ?? requestId,
            json,
        );
    }

    return runtimeConfigSchema.parse(json);
}

async function readJsonSafely(response: Response) {
    const text = await response.text();
    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text) as unknown;
    } catch {
        return null;
    }
}

function extractEnvelopeRequestId(json: unknown) {
    if (typeof json !== "object" || json === null || !("error" in json)) {
        return undefined;
    }
    const error = (json as { error?: unknown }).error;
    if (typeof error !== "object" || error === null || !("request_id" in error)) {
        return undefined;
    }
    const requestId = (error as { request_id?: unknown }).request_id;
    return typeof requestId === "string" ? requestId : undefined;
}


export function RuntimeConfigProvider({ children }: { children: ReactNode }) {
    const [runtimeConfig, setRuntimeConfig] = useState<RuntimeConfig | null>(null);
    const [error, setError] = useState<ReturnType<typeof normalizeFrontendError> | null>(null);

    useEffect(() => {
        fetchRuntimeConfig()
            .then((nextConfig) => {
                document.documentElement.lang = nextConfig.product.languageAccess.defaultLocale.code;
                document.documentElement.dir = nextConfig.product.languageAccess.defaultLocale.direction;
                setRuntimeFormattingDefaults({
                    locale: nextConfig.product.languageAccess.defaultLocale.code,
                    timeZone: nextConfig.product.languageAccess.defaultTimeZone,
                });
                setRuntimeDefaultColorMode(nextConfig.product.theming.defaultMode);
                setRuntimeConfig(nextConfig);
            })
            .catch((nextError: unknown) => {
                const normalized = normalizeFrontendError(nextError, {
                    source: "runtime-config-provider",
                    surface: "runtime-config",
                });
                reportFrontendError(normalized.report);
                setError(normalized);
            });
    }, []);

    const value = useMemo(() => runtimeConfig, [runtimeConfig]);

    if (error) {
        return (
            <Box component="main" sx={{ minHeight: "100vh", px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 5 } }}>
                <ErrorState
                    title={error.title}
                    titleComponent="h1"
                    description={error.description}
                    requestId={error.requestId}
                />
            </Box>
        );
    }

    if (!value) {
        return (
            <Box component="main" sx={{ minHeight: "100vh", px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 5 } }}>
                <LoadingState
                    title="Preparing Launchpad"
                    titleComponent="h1"
                    description="Loading the checked-in runtime contract before the starter routes mount."
                />
            </Box>
        );
    }

    return <RuntimeConfigContext.Provider value={value}>{children}</RuntimeConfigContext.Provider>;
}


export function useRuntimeConfig() {
    const context = useContext(RuntimeConfigContext);
    if (!context) {
        throw new Error("useRuntimeConfig must be used inside RuntimeConfigProvider.");
    }
    return context;
}
