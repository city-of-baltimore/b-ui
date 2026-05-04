import { ReactNode } from 'react';
import { z } from 'zod';
export declare const runtimeConfigSchema: z.ZodObject<{
    product: z.ZodObject<{
        application: z.ZodObject<{
            cityName: z.ZodString;
            title: z.ZodString;
            subtitle: z.ZodString;
            headerKicker: z.ZodString;
            heroEyebrow: z.ZodString;
        }, z.core.$strip>;
        navigation: z.ZodObject<{
            homePath: z.ZodString;
            staffPath: z.ZodString;
            staffLabel: z.ZodString;
        }, z.core.$strip>;
        languageAccess: z.ZodObject<{
            defaultLocale: z.ZodObject<{
                code: z.ZodString;
                label: z.ZodString;
                direction: z.ZodEnum<{
                    ltr: "ltr";
                    rtl: "rtl";
                }>;
            }, z.core.$strip>;
            defaultTimeZone: z.ZodString;
            supportLabel: z.ZodString;
            email: z.ZodString;
            phone: z.ZodString;
        }, z.core.$strip>;
        theming: z.ZodObject<{
            defaultMode: z.ZodEnum<{
                light: "light";
                dark: "dark";
                system: "system";
            }>;
            modes: z.ZodArray<z.ZodEnum<{
                light: "light";
                dark: "dark";
                system: "system";
            }>>;
        }, z.core.$strip>;
        surfaces: z.ZodObject<{
            shellMaxWidthPx: z.ZodNumber;
            contentMaxWidthPx: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    auth: z.ZodObject<{
        advertiseStaffTools: z.ZodBoolean;
        publicStaffNotice: z.ZodString;
    }, z.core.$strip>;
    map: z.ZodObject<{
        engine: z.ZodString;
        defaultCenter: z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>;
        defaultZoom: z.ZodNumber;
        minZoom: z.ZodNumber;
        maxZoom: z.ZodNumber;
        maxBounds: z.ZodTuple<[z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>, z.ZodTuple<[z.ZodNumber, z.ZodNumber], null>], null>;
        styleAssets: z.ZodObject<{
            glyphsUrl: z.ZodString;
            clusterLabelFontStack: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        basemap: z.ZodObject<{
            provider: z.ZodString;
            attribution: z.ZodString;
            light: z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                tileSize: z.ZodNumber;
                maxZoom: z.ZodNumber;
                tiles: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
            dark: z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                tileSize: z.ZodNumber;
                maxZoom: z.ZodNumber;
                tiles: z.ZodArray<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        pointDensity: z.ZodObject<{
            maxRenderedPoints: z.ZodNumber;
            clusterThreshold: z.ZodNumber;
            clusterRadius: z.ZodNumber;
            clusterMaxZoom: z.ZodNumber;
        }, z.core.$strip>;
        featureVisibility: z.ZodObject<{
            pointHydrationZoom: z.ZodNumber;
            pointFadeStartZoom: z.ZodNumber;
            pointVisibilityZoom: z.ZodNumber;
            showPointsWhenAreaSelected: z.ZodBoolean;
            showPointsWhenDetailSelected: z.ZodBoolean;
        }, z.core.$strip>;
        neighborhoodOverlay: z.ZodObject<{
            defaultVisible: z.ZodBoolean;
            citywideFillOpacity: z.ZodNumber;
            detailFillOpacity: z.ZodNumber;
            detailOpacityZoom: z.ZodNumber;
            selectedOutlineWidth: z.ZodNumber;
        }, z.core.$strip>;
        interaction: z.ZodObject<{
            citywidePadding: z.ZodNumber;
            citywideMaxZoom: z.ZodNumber;
            areaFocusPadding: z.ZodNumber;
            areaFocusMaxZoom: z.ZodNumber;
            pointFocusZoom: z.ZodNumber;
        }, z.core.$strip>;
        choropleth: z.ZodObject<{
            classCount: z.ZodNumber;
            classingMethod: z.ZodString;
            noDataLabel: z.ZodString;
            legendTitle: z.ZodString;
        }, z.core.$strip>;
        legend: z.ZodObject<{
            pointTitle: z.ZodString;
            areaTitle: z.ZodString;
        }, z.core.$strip>;
        statusColors: z.ZodRecord<z.ZodString, z.ZodString>;
    }, z.core.$strip>;
    storyModules: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        kind: z.ZodString;
        title: z.ZodString;
        body: z.ZodString;
    }, z.core.$strip>>;
    dataset: z.ZodObject<{
        labels: z.ZodRecord<z.ZodString, z.ZodString>;
        table: z.ZodObject<{
            pageSize: z.ZodNumber;
            pageSizeOptions: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        map: z.ZodObject<{
            choropleth: z.ZodObject<{
                defaultMetric: z.ZodString;
                metrics: z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    label: z.ZodString;
                    description: z.ZodString;
                    units: z.ZodString;
                    formula: z.ZodString;
                    palette: z.ZodString;
                }, z.core.$strip>>;
            }, z.core.$strip>;
            neighborhoodSummary: z.ZodObject<{
                title: z.ZodString;
                description: z.ZodString;
                progressMetric: z.ZodString;
                topItemCount: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
        detail: z.ZodObject<{
            sections: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
                fields: z.ZodArray<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type RuntimeConfig = z.infer<typeof runtimeConfigSchema>;
export declare function RuntimeConfigProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useRuntimeConfig(): {
    product: {
        application: {
            cityName: string;
            title: string;
            subtitle: string;
            headerKicker: string;
            heroEyebrow: string;
        };
        navigation: {
            homePath: string;
            staffPath: string;
            staffLabel: string;
        };
        languageAccess: {
            defaultLocale: {
                code: string;
                label: string;
                direction: "ltr" | "rtl";
            };
            defaultTimeZone: string;
            supportLabel: string;
            email: string;
            phone: string;
        };
        theming: {
            defaultMode: "light" | "dark" | "system";
            modes: ("light" | "dark" | "system")[];
        };
        surfaces: {
            shellMaxWidthPx: number;
            contentMaxWidthPx: number;
        };
    };
    auth: {
        advertiseStaffTools: boolean;
        publicStaffNotice: string;
    };
    map: {
        engine: string;
        defaultCenter: [number, number];
        defaultZoom: number;
        minZoom: number;
        maxZoom: number;
        maxBounds: [[number, number], [number, number]];
        styleAssets: {
            glyphsUrl: string;
            clusterLabelFontStack: string[];
        };
        basemap: {
            provider: string;
            attribution: string;
            light: {
                id: string;
                label: string;
                tileSize: number;
                maxZoom: number;
                tiles: string[];
            };
            dark: {
                id: string;
                label: string;
                tileSize: number;
                maxZoom: number;
                tiles: string[];
            };
        };
        pointDensity: {
            maxRenderedPoints: number;
            clusterThreshold: number;
            clusterRadius: number;
            clusterMaxZoom: number;
        };
        featureVisibility: {
            pointHydrationZoom: number;
            pointFadeStartZoom: number;
            pointVisibilityZoom: number;
            showPointsWhenAreaSelected: boolean;
            showPointsWhenDetailSelected: boolean;
        };
        neighborhoodOverlay: {
            defaultVisible: boolean;
            citywideFillOpacity: number;
            detailFillOpacity: number;
            detailOpacityZoom: number;
            selectedOutlineWidth: number;
        };
        interaction: {
            citywidePadding: number;
            citywideMaxZoom: number;
            areaFocusPadding: number;
            areaFocusMaxZoom: number;
            pointFocusZoom: number;
        };
        choropleth: {
            classCount: number;
            classingMethod: string;
            noDataLabel: string;
            legendTitle: string;
        };
        legend: {
            pointTitle: string;
            areaTitle: string;
        };
        statusColors: Record<string, string>;
    };
    storyModules: {
        id: string;
        kind: string;
        title: string;
        body: string;
    }[];
    dataset: {
        labels: Record<string, string>;
        table: {
            pageSize: number;
            pageSizeOptions: number[];
        };
        map: {
            choropleth: {
                defaultMetric: string;
                metrics: {
                    id: string;
                    label: string;
                    description: string;
                    units: string;
                    formula: string;
                    palette: string;
                }[];
            };
            neighborhoodSummary: {
                title: string;
                description: string;
                progressMetric: string;
                topItemCount: number;
            };
        };
        detail: {
            sections: {
                id: string;
                label: string;
                fields: string[];
            }[];
        };
    };
};
