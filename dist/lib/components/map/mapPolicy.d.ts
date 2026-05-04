import { AppMapFeatureVisibility } from './types';
type MapHydrationArgs = {
    featureVisibility: AppMapFeatureVisibility;
    areaSelected?: boolean;
    detailSelected?: boolean;
    zoom?: number | null;
};
type PointLayerStateArgs = MapHydrationArgs & {
    pointCount?: number;
};
export type AppMapPointLayerState = {
    active: boolean;
    hint: string;
    mode: "citywide" | "detail" | "area" | "zoom" | "empty";
    summary: string;
    text: string;
};
/**
 * Feature-level orchestration can reuse this policy so heavy point payloads are
 * only requested when the map is in a point-meaningful state.
 */
export declare function shouldHydratePointsForMapSurface({ featureVisibility, areaSelected, detailSelected, zoom, }: MapHydrationArgs): boolean;
export declare function shouldShowPointLayers({ featureVisibility, zoom, }: {
    featureVisibility: AppMapFeatureVisibility;
    zoom?: number | null;
}): boolean;
export declare function resolvePointLayerState({ featureVisibility, areaSelected, detailSelected, pointCount, zoom, }: PointLayerStateArgs): AppMapPointLayerState;
export {};
