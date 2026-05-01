import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { lazy, Suspense, useEffect, useId, useState, type ElementType } from "react";

import { useColorMode } from "../colorMode";
import { SectionSurface } from "../SectionSurface";
import { SurfaceHeader } from "../SurfaceHeader";
import { AppMapLegend } from "../map/AppMapLegend";
import { AppMapSurfaceActions } from "../map/AppMapSurfaceActions";
import { resolvePointLayerState } from "../map/mapPolicy";
import type {
    AppMapAreaLayer,
    AppMapFeatureVisibility,
    AppMapInteractionConfig,
    AppMapNeighborhoodOverlay,
    AppMapPoint,
    AppMapPointDensity,
    AppMapStyleAssets,
    BasemapStyleDefinition,
} from "../map/types";

const LazyAppMapCanvas = lazy(() =>
    import("../map/AppMapCanvas").then((module) => ({ default: module.AppMapCanvas })),
);

type AppMapProps = {
    title: string;
    description?: string;
    points: AppMapPoint[];
    areaLayer?: AppMapAreaLayer | null;
    legendTitles?: {
        areaTitle: string;
        pointTitle: string;
        pointVisibilityHint?: string;
    };
    selectedPointId?: string | null;
    selectedAreaId?: string | null;
    onSelectPoint: (pointId: string) => void;
    onSelectArea?: (areaId: string | null) => void;
    onResetView?: () => void;
    onMetricChange?: (metricId: string) => void;
    onMapZoomChange?: (zoom: number) => void;
    center: [number, number];
    zoom: number;
    minZoom: number;
    maxZoom: number;
    maxBounds: [[number, number], [number, number]];
    basemap: {
        attribution: string;
        light: BasemapStyleDefinition;
        dark: BasemapStyleDefinition;
    };
    styleAssets: AppMapStyleAssets;
    pointDensity: AppMapPointDensity;
    featureVisibility: AppMapFeatureVisibility;
    neighborhoodOverlay: AppMapNeighborhoodOverlay;
    interaction: AppMapInteractionConfig;
    statusColors: Record<string, string>;
    resetSequence?: number;
    titleComponent?: ElementType;
};

/**
 * Provides the canonical Launchpad map surface so point exploration,
 * neighborhood choropleths, legends, and map controls share one token-driven,
 * decomposition-friendly implementation.
 */
export function AppMap({
    title,
    description,
    points,
    areaLayer,
    legendTitles,
    selectedPointId,
    selectedAreaId,
    onSelectPoint,
    onSelectArea,
    onResetView,
    onMetricChange,
    onMapZoomChange,
    center,
    zoom,
    minZoom,
    maxZoom,
    maxBounds,
    basemap,
    styleAssets,
    pointDensity,
    featureVisibility,
    neighborhoodOverlay,
    interaction,
    statusColors,
    resetSequence,
    titleComponent,
}: AppMapProps) {
    const theme = useTheme();
    const { resolvedMode } = useColorMode();
    const summaryId = useId();
    const [currentZoom, setCurrentZoom] = useState(zoom);
    const resolvedDescription = [description, areaLayer?.metric.description]
        .filter(Boolean)
        .join(" ") || undefined;
    const pointLayerState = resolvePointLayerState({
        featureVisibility,
        areaSelected: Boolean(selectedAreaId),
        detailSelected: Boolean(selectedPointId),
        pointCount: points.length,
        zoom: currentZoom,
    });
    const selectedAreaName =
        selectedAreaId &&
        areaLayer?.geojson.features.find((feature) => feature.properties.nsa_id === selectedAreaId)?.properties
            .nsa_name;
    const screenReaderSummary = [
        `Neighborhood metric: ${areaLayer?.metric.label ?? "Neighborhood choropleth"}.`,
        selectedAreaName ? `Focused area: ${selectedAreaName}.` : "No neighborhood focus applied.",
        pointLayerState.summary,
    ].join(" ");
    useEffect(() => {
        setCurrentZoom(zoom);
    }, [zoom]);

    return (
        <SectionSurface data-testid="app-map" padding="default" tone="soft">
            <Stack spacing={2.5}>
                <SurfaceHeader
                    title={title}
                    titleComponent={titleComponent}
                    titleVariant="h5"
                    description={resolvedDescription}
                    actions={
                        <AppMapSurfaceActions
                            areaLayer={areaLayer}
                            onMetricChange={onMetricChange}
                            onResetView={onResetView}
                            theme={theme}
                        />
                    }
                />

                <Typography
                    aria-live="polite"
                    component="p"
                    data-testid="app-map-accessibility-summary"
                    id={summaryId}
                    sx={visuallyHidden}
                    variant="body2"
                >
                    {screenReaderSummary}
                </Typography>

                <Box className="lp-map-frame">
                    <Suspense
                        fallback={
                            <Box
                                className="lp-map-canvas"
                                data-testid="app-map-canvas"
                                sx={{ display: "grid", minHeight: 420, placeItems: "center" }}
                            >
                                <Typography color="text.secondary" role="status" variant="body2">
                                    Loading interactive map…
                                </Typography>
                            </Box>
                        }
                    >
                        <LazyAppMapCanvas
                            key={`${resolvedMode}:${basemap.light.id}:${basemap.dark.id}`}
                            areaLayer={areaLayer}
                            basemap={basemap}
                            center={center}
                            describedById={summaryId}
                            featureVisibility={featureVisibility}
                            interaction={interaction}
                            label={title}
                            maxBounds={maxBounds}
                            maxZoom={maxZoom}
                            minZoom={minZoom}
                            neighborhoodOverlay={neighborhoodOverlay}
                            pointDensity={pointDensity}
                            points={points}
                            resetSequence={resetSequence}
                            selectedAreaId={selectedAreaId}
                            selectedPointId={selectedPointId}
                            statusColors={statusColors}
                            styleAssets={styleAssets}
                            zoom={zoom}
                            onMapZoomChange={(nextZoom) => {
                                setCurrentZoom(nextZoom);
                                onMapZoomChange?.(nextZoom);
                            }}
                            onSelectArea={onSelectArea}
                            onSelectPoint={onSelectPoint}
                        />
                    </Suspense>

                    <AppMapLegend
                        areaLayer={neighborhoodOverlay.defaultVisible ? areaLayer : null}
                        legendTitles={legendTitles}
                        pointLayerState={{
                            ...pointLayerState,
                            hint:
                                legendTitles?.pointVisibilityHint ??
                                pointLayerState.hint,
                        }}
                        statusColors={statusColors}
                        theme={theme}
                    />
                </Box>
            </Stack>
        </SectionSurface>
    );
}

export type {
    AppMapAreaFeature,
    AppMapAreaLayer,
    AppMapFeatureVisibility,
    AppMapInteractionConfig,
    AppMapNeighborhoodOverlay,
    AppMapPoint,
    AppMapPointDensity,
    AppMapStyleAssets,
    BasemapStyleDefinition,
} from "../map/types";
