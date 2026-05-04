import { Map as MapLibreMap } from 'maplibre-gl';
import { AppMapAreaLayer, AppMapInteractionConfig, AppMapPoint } from './types';
export type MapFocusState = {
    areaId: string | null;
    pointId: string | null;
    resetSequence: number;
};
/**
 * Keeps map camera coordination in its own module so selection/reset behavior
 * can evolve without bloating the shared AppMap wrapper.
 */
export declare function syncAppMapFocus({ areaLayer, interaction, map, maxBounds, points, previousFocus, resetSequence, selectedAreaId, selectedPointId, }: {
    areaLayer?: AppMapAreaLayer | null;
    interaction: AppMapInteractionConfig;
    map: MapLibreMap;
    maxBounds: [[number, number], [number, number]];
    points: AppMapPoint[];
    previousFocus: MapFocusState;
    resetSequence?: number;
    selectedAreaId?: string | null;
    selectedPointId?: string | null;
}): {
    areaId: string | null;
    pointId: string | null;
    resetSequence: number;
};
