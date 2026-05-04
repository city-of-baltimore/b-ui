import { AppMapAreaLayer, AppMapFeatureVisibility, AppMapInteractionConfig, AppMapNeighborhoodOverlay, AppMapPoint, AppMapPointDensity, AppMapStyleAssets, BasemapStyleDefinition } from '../types';
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
export declare function AppMapCanvas({ areaLayer, basemap, center, describedById, featureVisibility, interaction, label, maxBounds, maxZoom, minZoom, neighborhoodOverlay, onMapZoomChange, onSelectArea, onSelectPoint, pointDensity, points, resetSequence, selectedAreaId, selectedPointId, statusColors, styleAssets, zoom, }: AppMapCanvasProps): import("react/jsx-runtime").JSX.Element;
export {};
