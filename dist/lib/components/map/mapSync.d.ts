import { FeatureCollection as GeoJsonFeatureCollection } from 'geojson';
import { Map as MapLibreMap } from 'maplibre-gl';
import { Theme } from '@mui/material/styles';
import { AppMapAreaLayer, AppMapFeatureVisibility, AppMapNeighborhoodOverlay, AppMapPoint, AppMapPointDensity, AppMapStyleAssets } from './types';
type AppMapSceneColors = {
    areaColors: [string, string, string, string, string];
    clusterFill: string;
    clusterLabel: string;
    clusterStroke: string;
    noDataFill: string;
    outlineColor: string;
    pointHalo: string;
    pointStroke: string;
    selectedOutline: string;
};
export declare function resolveAppMapSceneColors(theme: Theme): AppMapSceneColors;
export declare function buildPointFeatureCollection(points: AppMapPoint[], statusColors: Record<string, string>, defaultStatusColor: string, selectedPointId?: string | null): GeoJsonFeatureCollection;
export declare function ensureAreaScene({ areaLayer, colors, map, neighborhoodOverlay, selectedAreaId, }: {
    areaLayer?: AppMapAreaLayer | null;
    colors: AppMapSceneColors;
    map: MapLibreMap;
    neighborhoodOverlay: AppMapNeighborhoodOverlay;
    selectedAreaId?: string | null;
}): void;
export declare function syncAreaScene({ areaLayer, colors, map, neighborhoodOverlay, selectedAreaId, }: {
    areaLayer?: AppMapAreaLayer | null;
    colors: AppMapSceneColors;
    map: MapLibreMap;
    neighborhoodOverlay: AppMapNeighborhoodOverlay;
    selectedAreaId?: string | null;
}): void;
export declare function syncPointScene({ colors, featureVisibility, map, pointData, pointDensity, previousClustered, shouldCluster, styleAssets, }: {
    colors: AppMapSceneColors;
    featureVisibility: AppMapFeatureVisibility;
    map: MapLibreMap;
    pointData: GeoJsonFeatureCollection;
    pointDensity: AppMapPointDensity;
    previousClustered: boolean | null;
    shouldCluster: boolean;
    styleAssets: AppMapStyleAssets;
}): boolean;
export {};
