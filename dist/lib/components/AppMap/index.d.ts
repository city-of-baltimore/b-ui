import { ElementType } from 'react';
import { AppMapAreaLayer, AppMapFeatureVisibility, AppMapInteractionConfig, AppMapNeighborhoodOverlay, AppMapPoint, AppMapPointDensity, AppMapStyleAssets, BasemapStyleDefinition } from '../map/types';
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
export declare function AppMap({ title, description, points, areaLayer, legendTitles, selectedPointId, selectedAreaId, onSelectPoint, onSelectArea, onResetView, onMetricChange, onMapZoomChange, center, zoom, minZoom, maxZoom, maxBounds, basemap, styleAssets, pointDensity, featureVisibility, neighborhoodOverlay, interaction, statusColors, resetSequence, titleComponent, }: AppMapProps): import("react/jsx-runtime").JSX.Element;
export type { AppMapAreaFeature, AppMapAreaLayer, AppMapFeatureVisibility, AppMapInteractionConfig, AppMapNeighborhoodOverlay, AppMapPoint, AppMapPointDensity, AppMapStyleAssets, BasemapStyleDefinition, } from '../map/types';
