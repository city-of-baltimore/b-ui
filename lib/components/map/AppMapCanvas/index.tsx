import "maplibre-gl/dist/maplibre-gl.css";

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useMemo, useRef, useState } from "react";
import type { StyleSpecification, Map as MapLibreMap } from "maplibre-gl";

import { useColorMode } from "../../colorMode";
import { buildBasemapStyle } from "../../mapStyle";
import { syncAppMapFocus, type MapFocusState } from "../mapFocus";
import { bindAppMapInteractions } from "../mapInteractions";
import { loadMapLibreRuntime } from "../mapRuntime";
import { createAppMapScene, destroyAppMapScene } from "../mapScene";
import {
    buildPointFeatureCollection,
    ensureAreaScene,
    resolveAppMapSceneColors,
    syncAreaScene,
    syncPointScene,
} from "../mapSync";
import type {
    AppMapAreaLayer,
    AppMapFeatureVisibility,
    AppMapInteractionConfig,
    AppMapNeighborhoodOverlay,
    AppMapPoint,
    AppMapPointDensity,
    AppMapStyleAssets,
    BasemapStyleDefinition,
} from "../types";

function readCssVariable(variableName: string, fallback: string) {
    if (typeof document === "undefined") {
        return fallback;
    }

    const value = window.getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    return value || fallback;
}

type AppMapCanvasProps = {
    areaLayer?: AppMapAreaLayer | null;
    basemap: {
        attribution: string;
        dark: BasemapStyleDefinition;
        light: BasemapStyleDefinition;
    };
    center: [number, number];
    describedById?: string;
    featureVisibility: AppMapFeatureVisibility;
    interaction: AppMapInteractionConfig;
    label?: string;
    maxBounds: [[number, number], [number, number]];
    maxZoom: number;
    minZoom: number;
    neighborhoodOverlay: AppMapNeighborhoodOverlay;
    onMapZoomChange?: (zoom: number) => void;
    onSelectArea?: (areaId: string | null) => void;
    onSelectPoint: (pointId: string) => void;
    pointDensity: AppMapPointDensity;
    points: AppMapPoint[];
    resetSequence?: number;
    selectedAreaId?: string | null;
    selectedPointId?: string | null;
    statusColors: Record<string, string>;
    styleAssets: AppMapStyleAssets;
    zoom: number;
};

/**
 * Owns the imperative MapLibre scene so the public AppMap component stays a
 * thin shared surface instead of a do-everything map container.
 */
export function AppMapCanvas({
    areaLayer,
    basemap,
    center,
    describedById,
    featureVisibility,
    interaction,
    label,
    maxBounds,
    maxZoom,
    minZoom,
    neighborhoodOverlay,
    onMapZoomChange,
    onSelectArea,
    onSelectPoint,
    pointDensity,
    points,
    resetSequence,
    selectedAreaId,
    selectedPointId,
    statusColors,
    styleAssets,
    zoom,
}: AppMapCanvasProps) {
    const theme = useTheme();
    const { resolvedMode } = useColorMode();
    const basemapDefinition = resolvedMode === "dark" ? basemap.dark : basemap.light;
    const mapStyle = useMemo<StyleSpecification>(
        () =>
            buildBasemapStyle(basemapDefinition, {
                attribution: basemap.attribution,
                backgroundColor: readCssVariable("--lp-map-canvas-fallback", theme.palette.divider),
                glyphsUrl: styleAssets.glyphsUrl,
            }),
        [basemap.attribution, basemapDefinition, styleAssets.glyphsUrl, theme.palette.divider],
    );
    const mapColors = useMemo(() => resolveAppMapSceneColors(theme), [theme]);
    const pointData = useMemo(
        () =>
            buildPointFeatureCollection(
                points,
                statusColors,
                statusColors.default ?? theme.palette.info.main,
                selectedPointId,
            ),
        [points, selectedPointId, statusColors, theme.palette.info.main],
    );
    const shouldCluster = points.length >= pointDensity.clusterThreshold;
    const [mapError, setMapError] = useState("");
    const [mapReady, setMapReady] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<MapLibreMap | null>(null);
    const clusterModeRef = useRef<boolean | null>(null);
    const focusStateRef = useRef<MapFocusState>({
        areaId: null,
        pointId: null,
        resetSequence: resetSequence ?? 0,
    });
    const areaLayerRef = useRef(areaLayer);
    const interactionRef = useRef(interaction);
    const mapColorsRef = useRef(mapColors);
    const neighborhoodOverlayRef = useRef(neighborhoodOverlay);
    const onSelectAreaRef = useRef(onSelectArea);
    const onSelectPointRef = useRef(onSelectPoint);
    const onMapZoomChangeRef = useRef(onMapZoomChange);
    const pointDataRef = useRef(pointData);
    const pointDensityRef = useRef(pointDensity);
    const pointsRef = useRef(points);
    const resetSequenceRef = useRef(resetSequence);
    const selectedAreaIdRef = useRef(selectedAreaId);
    const selectedPointIdRef = useRef(selectedPointId);
    const shouldClusterRef = useRef(shouldCluster);
    const styleAssetsRef = useRef(styleAssets);

    useEffect(() => {
        areaLayerRef.current = areaLayer;
    }, [areaLayer]);

    useEffect(() => {
        interactionRef.current = interaction;
    }, [interaction]);

    useEffect(() => {
        mapColorsRef.current = mapColors;
    }, [mapColors]);

    useEffect(() => {
        neighborhoodOverlayRef.current = neighborhoodOverlay;
    }, [neighborhoodOverlay]);

    useEffect(() => {
        onSelectAreaRef.current = onSelectArea;
    }, [onSelectArea]);

    useEffect(() => {
        onSelectPointRef.current = onSelectPoint;
    }, [onSelectPoint]);

    useEffect(() => {
        onMapZoomChangeRef.current = onMapZoomChange;
    }, [onMapZoomChange]);

    useEffect(() => {
        pointDataRef.current = pointData;
    }, [pointData]);

    useEffect(() => {
        pointDensityRef.current = pointDensity;
    }, [pointDensity]);

    useEffect(() => {
        pointsRef.current = points;
    }, [points]);

    useEffect(() => {
        resetSequenceRef.current = resetSequence;
    }, [resetSequence]);

    useEffect(() => {
        selectedAreaIdRef.current = selectedAreaId;
    }, [selectedAreaId]);

    useEffect(() => {
        selectedPointIdRef.current = selectedPointId;
    }, [selectedPointId]);

    useEffect(() => {
        shouldClusterRef.current = shouldCluster;
    }, [shouldCluster]);

    useEffect(() => {
        styleAssetsRef.current = styleAssets;
    }, [styleAssets]);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        let cancelled = false;
        let cleanupInteractions: (() => void) | null = null;
        let handleZoomEnd: (() => void) | null = null;

        void loadMapLibreRuntime()
            .then((maplibre) => {
                if (cancelled || !containerRef.current) {
                    return;
                }

                const map = createAppMapScene({
                    center,
                    container: containerRef.current,
                    mapStyle,
                    maplibre,
                    maxBounds,
                    maxZoom,
                    minZoom,
                    zoom,
                });
                mapRef.current = map;
                clusterModeRef.current = null;
                setMapError("");
                setMapReady(false);

                handleZoomEnd = () => {
                    onMapZoomChangeRef.current?.(map.getZoom());
                };

                map.on("load", () => {
                    if (cancelled) {
                        return;
                    }

                    ensureAreaScene({
                        areaLayer: areaLayerRef.current,
                        colors: mapColorsRef.current,
                        map,
                        neighborhoodOverlay: neighborhoodOverlayRef.current,
                        selectedAreaId: selectedAreaIdRef.current,
                    });
                    syncAreaScene({
                        areaLayer: areaLayerRef.current,
                        colors: mapColorsRef.current,
                        map,
                        neighborhoodOverlay: neighborhoodOverlayRef.current,
                        selectedAreaId: selectedAreaIdRef.current,
                    });
                    clusterModeRef.current = syncPointScene({
                        colors: mapColorsRef.current,
                        featureVisibility,
                        map,
                        pointData: pointDataRef.current,
                        pointDensity: pointDensityRef.current,
                        previousClustered: clusterModeRef.current,
                        shouldCluster: shouldClusterRef.current,
                        styleAssets: styleAssetsRef.current,
                    });
                    cleanupInteractions = bindAppMapInteractions({
                        map,
                        onSelectArea: (areaId) => onSelectAreaRef.current?.(areaId),
                        onSelectPoint: (pointId) => onSelectPointRef.current(pointId),
                    });
                    focusStateRef.current = syncAppMapFocus({
                        areaLayer: areaLayerRef.current,
                        interaction: interactionRef.current,
                        map,
                        maxBounds,
                        points: pointsRef.current,
                        previousFocus: focusStateRef.current,
                        resetSequence: resetSequenceRef.current,
                        selectedAreaId: selectedAreaIdRef.current,
                        selectedPointId: selectedPointIdRef.current,
                    });
                    setMapReady(true);
                    onMapZoomChangeRef.current?.(map.getZoom());
                });

                map.on("zoomend", handleZoomEnd);
            })
            .catch(() => {
                if (!cancelled) {
                    setMapError("The interactive map could not start in this browser.");
                }
            });

        return () => {
            cancelled = true;
            setMapReady(false);
            cleanupInteractions?.();
            if (mapRef.current && handleZoomEnd) {
                mapRef.current.off("zoomend", handleZoomEnd);
            }
            destroyAppMapScene(mapRef.current);
            mapRef.current = null;
            clusterModeRef.current = null;
        };
    }, [
        center,
        featureVisibility,
        mapStyle,
        maxBounds,
        maxZoom,
        minZoom,
        pointDensity,
        styleAssets,
        zoom,
    ]);

    useEffect(() => {
        const map = mapRef.current;
        if (!mapReady || !map) {
            return;
        }

        ensureAreaScene({
            areaLayer,
            colors: mapColors,
            map,
            neighborhoodOverlay,
            selectedAreaId,
        });
        syncAreaScene({
            areaLayer,
            colors: mapColors,
            map,
            neighborhoodOverlay,
            selectedAreaId,
        });
        clusterModeRef.current = syncPointScene({
            colors: mapColors,
            featureVisibility,
            map,
            pointData,
            pointDensity,
            previousClustered: clusterModeRef.current,
            shouldCluster,
            styleAssets,
        });
    }, [
        areaLayer,
        featureVisibility,
        mapColors,
        mapReady,
        neighborhoodOverlay,
        pointData,
        pointDensity,
        selectedAreaId,
        shouldCluster,
        styleAssets,
    ]);

    useEffect(() => {
        const map = mapRef.current;
        if (!mapReady || !map) {
            return;
        }

        focusStateRef.current = syncAppMapFocus({
            areaLayer,
            interaction,
            map,
            maxBounds,
            points,
            previousFocus: focusStateRef.current,
            resetSequence,
            selectedAreaId,
            selectedPointId,
        });
    }, [
        areaLayer,
        interaction,
        mapReady,
        maxBounds,
        points,
        resetSequence,
        selectedAreaId,
        selectedPointId,
    ]);

    return (
        <Box
            aria-describedby={describedById}
            aria-label={label}
            className="lp-map-canvas"
            data-testid="app-map-canvas"
            role="group"
            sx={{ position: "relative" }}
        >
            <Box ref={containerRef} sx={{ height: 420, width: "100%" }} />
            {mapError ? (
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "var(--lp-map-overlay-bg)",
                        p: 2,
                    }}
                >
                    <Typography role="alert" variant="body2">
                        {mapError}
                    </Typography>
                </Box>
            ) : null}
        </Box>
    );
}
