import type { Map as MapLibreMap } from "maplibre-gl";

import { featureBounds } from "../../lib/geojson";
import type {
  AppMapAreaFeature,
  AppMapAreaLayer,
  AppMapInteractionConfig,
  AppMapPoint,
} from "./types";

export type MapFocusState = {
  areaId: string | null;
  pointId: string | null;
  resetSequence: number;
};

function fitMapToCitywide(
  map: MapLibreMap,
  bounds: [[number, number], [number, number]],
  interaction: AppMapInteractionConfig,
) {
  map.stop();
  map.fitBounds(bounds, {
    padding: interaction.citywidePadding,
    maxZoom: interaction.citywideMaxZoom,
    duration: 600,
  });
}

function focusMapOnArea(
  map: MapLibreMap,
  feature: AppMapAreaFeature,
  interaction: AppMapInteractionConfig,
) {
  const bounds = featureBounds(feature);
  if (!bounds) {
    return;
  }

  map.stop();
  map.fitBounds(bounds, {
    padding: interaction.areaFocusPadding,
    maxZoom: interaction.areaFocusMaxZoom,
    duration: 600,
  });
}

function focusMapOnPoint(
  map: MapLibreMap,
  point: AppMapPoint,
  interaction: AppMapInteractionConfig,
) {
  map.stop();
  map.easeTo({
    center: [point.longitude, point.latitude],
    zoom: interaction.pointFocusZoom,
    duration: 500,
  });
}

/**
 * Keeps map camera coordination in its own module so selection/reset behavior
 * can evolve without bloating the shared AppMap wrapper.
 */
export function syncAppMapFocus({
  areaLayer,
  interaction,
  map,
  maxBounds,
  points,
  previousFocus,
  resetSequence,
  selectedAreaId,
  selectedPointId,
}: {
  areaLayer?: AppMapAreaLayer | null;
  interaction: AppMapInteractionConfig;
  map: MapLibreMap;
  maxBounds: [[number, number], [number, number]];
  points: AppMapPoint[];
  previousFocus: MapFocusState;
  resetSequence?: number;
  selectedAreaId?: string | null;
  selectedPointId?: string | null;
}) {
  const nextResetSequence = resetSequence ?? 0;
  const selectedAreaFeature = areaLayer?.geojson.features.find(
    (feature) => feature.properties.nsa_id === selectedAreaId,
  );
  const selectedPoint = points.find((point) => point.id === selectedPointId);

  if (nextResetSequence !== previousFocus.resetSequence) {
    fitMapToCitywide(map, maxBounds, interaction);
  } else if (selectedAreaId && selectedAreaId !== previousFocus.areaId && selectedAreaFeature) {
    focusMapOnArea(map, selectedAreaFeature, interaction);
  } else if (selectedPointId && selectedPointId !== previousFocus.pointId && selectedPoint) {
    focusMapOnPoint(map, selectedPoint, interaction);
  } else if (
    !selectedAreaId &&
    !selectedPointId &&
    (previousFocus.areaId || previousFocus.pointId)
  ) {
    fitMapToCitywide(map, maxBounds, interaction);
  }

  return {
    areaId: selectedAreaId ?? null,
    pointId: selectedPointId ?? null,
    resetSequence: nextResetSequence,
  };
}
