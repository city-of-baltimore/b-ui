import type { AppMapFeatureVisibility } from "./types";

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
export function shouldHydratePointsForMapSurface({
  featureVisibility,
  areaSelected = false,
  detailSelected = false,
  zoom,
}: MapHydrationArgs) {
  if (
    typeof zoom === "number" &&
    Number.isFinite(zoom) &&
    zoom >= featureVisibility.pointHydrationZoom
  ) {
    return true;
  }

  if (featureVisibility.showPointsWhenAreaSelected && areaSelected) {
    return true;
  }

  if (featureVisibility.showPointsWhenDetailSelected && detailSelected) {
    return true;
  }

  return false;
}

export function shouldShowPointLayers({
  featureVisibility,
  zoom,
}: {
  featureVisibility: AppMapFeatureVisibility;
  zoom?: number | null;
}) {
  return (
    typeof zoom === "number" &&
    Number.isFinite(zoom) &&
    zoom >= featureVisibility.pointVisibilityZoom
  );
}

export function resolvePointLayerState({
  featureVisibility,
  areaSelected = false,
  detailSelected = false,
  pointCount = 0,
  zoom,
}: PointLayerStateArgs): AppMapPointLayerState {
  const hasPoints = pointCount > 0;
  const pointsVisible = shouldShowPointLayers({ featureVisibility, zoom });

  if (pointsVisible && hasPoints) {
    return {
      active: true,
      hint: "Request points are visible above the neighborhood choropleth at point scale.",
      mode: detailSelected ? "detail" : areaSelected ? "area" : "zoom",
      summary: `Showing ${pointCount} request points above the neighborhood choropleth.`,
      text: `Showing ${pointCount} request points`,
    };
  }

  if (pointsVisible && !hasPoints) {
    return {
      active: false,
      hint: "The map is at point scale, but no request points match the current slice.",
      mode: "empty",
      summary: "No request points match the current filters at the current map scale.",
      text: "No request points in this slice",
    };
  }

  const triggerLabel = detailSelected
    ? "Points will appear when detail focus reaches point scale."
    : areaSelected && featureVisibility.showPointsWhenAreaSelected
      ? "Points can appear for focused areas once the map reaches point scale."
      : `Points appear once the map reaches ${featureVisibility.pointVisibilityZoom.toFixed(1)} zoom.`;

  return {
    active: false,
    hint: triggerLabel,
    mode: detailSelected ? "detail" : areaSelected ? "area" : "citywide",
    summary: `Request points are hidden until the map reaches ${featureVisibility.pointVisibilityZoom.toFixed(1)} zoom.`,
    text: `Points hidden below zoom ${featureVisibility.pointVisibilityZoom.toFixed(1)}`,
  };
}
