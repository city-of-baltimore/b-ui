import type { FeatureCollection as GeoJsonFeatureCollection } from "geojson";
import type { GeoJSONSource, Map as MapLibreMap } from "maplibre-gl";
import { alpha, type Theme } from "@mui/material/styles";

import type {
  AppMapAreaLayer,
  AppMapFeatureVisibility,
  AppMapNeighborhoodOverlay,
  AppMapPoint,
  AppMapPointDensity,
  AppMapStyleAssets,
} from "./types";

const EMPTY_FEATURE_COLLECTION: GeoJsonFeatureCollection = {
  type: "FeatureCollection",
  features: [],
};

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

function readCssVariable(variableName: string, fallback: string) {
  if (typeof document === "undefined") {
    return fallback;
  }

  const value = window.getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  return value || fallback;
}

export function resolveAppMapSceneColors(theme: Theme): AppMapSceneColors {
  const isDark = theme.palette.mode === "dark";

  return {
    areaColors: [
      readCssVariable("--lp-map-choropleth-1", alpha(theme.palette.primary.main, 0.14)),
      readCssVariable("--lp-map-choropleth-2", alpha(theme.palette.primary.main, 0.24)),
      readCssVariable("--lp-map-choropleth-3", alpha(theme.palette.primary.main, 0.42)),
      readCssVariable("--lp-map-choropleth-4", alpha(theme.palette.primary.main, 0.62)),
      readCssVariable("--lp-map-choropleth-5", theme.palette.primary.dark),
    ],
    clusterFill: alpha(theme.palette.primary.main, isDark ? 0.84 : 0.78),
    clusterLabel: theme.palette.common.white,
    clusterStroke: alpha(theme.palette.common.white, 0.94),
    noDataFill: readCssVariable("--lp-map-choropleth-no-data", theme.palette.divider),
    outlineColor: readCssVariable("--lp-map-choropleth-outline", theme.palette.primary.dark),
    pointHalo: alpha(theme.palette.common.white, isDark ? 0.52 : 0.88),
    pointStroke: theme.palette.common.white,
    selectedOutline: readCssVariable("--lp-map-selected-outline", theme.palette.warning.main),
  };
}

export function buildPointFeatureCollection(
  points: AppMapPoint[],
  statusColors: Record<string, string>,
  defaultStatusColor: string,
  selectedPointId?: string | null,
): GeoJsonFeatureCollection {
  return {
    type: "FeatureCollection",
    features: points.map((point) => ({
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [point.longitude, point.latitude],
      },
      properties: {
        id: point.id,
        title: point.title,
        status: point.status,
        color:
          statusColors[point.status ?? "default"] ??
          statusColors.default ??
          defaultStatusColor,
        selected: point.id === selectedPointId,
      },
    })),
  };
}

function removeLayerIfPresent(map: MapLibreMap, layerId: string) {
  if (map.getLayer(layerId)) {
    map.removeLayer(layerId);
  }
}

function removeSourceIfPresent(map: MapLibreMap, sourceId: string) {
  if (map.getSource(sourceId)) {
    map.removeSource(sourceId);
  }
}

function setLayerVisibility(map: MapLibreMap, layerId: string, visible: boolean) {
  if (!map.getLayer(layerId)) {
    return;
  }

  map.setLayoutProperty(layerId, "visibility", visible ? "visible" : "none");
}

function buildPointOpacityExpression({
  featureVisibility,
  visibleOpacity,
}: {
  featureVisibility: AppMapFeatureVisibility;
  visibleOpacity: number;
}) {
  return [
    "interpolate",
    ["linear"],
    ["zoom"],
    featureVisibility.pointFadeStartZoom,
    0,
    featureVisibility.pointVisibilityZoom,
    visibleOpacity,
  ] as const;
}

function buildAreaFillOpacityExpression(overlay: AppMapNeighborhoodOverlay) {
  return [
    "interpolate",
    ["linear"],
    ["zoom"],
    Math.max(0, overlay.detailOpacityZoom - 0.8),
    [
      "case",
      ["==", ["coalesce", ["get", "class_index"], -1], -1],
      0.48,
      overlay.citywideFillOpacity,
    ],
    overlay.detailOpacityZoom,
    [
      "case",
      ["==", ["coalesce", ["get", "class_index"], -1], -1],
      0.48,
      overlay.detailFillOpacity,
    ],
  ] as const;
}

function buildAreaFillColorExpression(colors: AppMapSceneColors) {
  return [
    "match",
    ["coalesce", ["get", "class_index"], -1],
    0,
    colors.areaColors[0],
    1,
    colors.areaColors[1],
    2,
    colors.areaColors[2],
    3,
    colors.areaColors[3],
    4,
    colors.areaColors[4],
    colors.noDataFill,
  ] as const;
}

function buildAreaOutlineColorExpression(
  colors: AppMapSceneColors,
  selectedAreaId?: string | null,
) {
  return [
    "case",
    ["==", ["get", "nsa_id"], selectedAreaId ?? ""],
    colors.selectedOutline,
    colors.outlineColor,
  ] as const;
}

function buildAreaOutlineWidthExpression(
  overlay: AppMapNeighborhoodOverlay,
  selectedAreaId?: string | null,
) {
  return [
    "case",
    ["==", ["get", "nsa_id"], selectedAreaId ?? ""],
    overlay.selectedOutlineWidth,
    1.1,
  ] as const;
}

export function ensureAreaScene({
  areaLayer,
  colors,
  map,
  neighborhoodOverlay,
  selectedAreaId,
}: {
  areaLayer?: AppMapAreaLayer | null;
  colors: AppMapSceneColors;
  map: MapLibreMap;
  neighborhoodOverlay: AppMapNeighborhoodOverlay;
  selectedAreaId?: string | null;
}) {
  if (!map.getSource("launchpad-areas")) {
    map.addSource("launchpad-areas", {
      type: "geojson",
      data: (areaLayer?.geojson ?? EMPTY_FEATURE_COLLECTION) as never,
    });
  }

  if (!map.getLayer("launchpad-areas-fill")) {
    map.addLayer({
      id: "launchpad-areas-fill",
      type: "fill",
      source: "launchpad-areas",
      paint: {
        "fill-color": buildAreaFillColorExpression(colors) as never,
        "fill-opacity": buildAreaFillOpacityExpression(neighborhoodOverlay) as never,
      },
    });
  }

  if (!map.getLayer("launchpad-area-outline")) {
    map.addLayer({
      id: "launchpad-area-outline",
      type: "line",
      source: "launchpad-areas",
      paint: {
        "line-color": buildAreaOutlineColorExpression(colors, selectedAreaId) as never,
        "line-width": buildAreaOutlineWidthExpression(neighborhoodOverlay, selectedAreaId) as never,
        "line-opacity": 0.96,
      },
    });
  }
}

export function syncAreaScene({
  areaLayer,
  colors,
  map,
  neighborhoodOverlay,
  selectedAreaId,
}: {
  areaLayer?: AppMapAreaLayer | null;
  colors: AppMapSceneColors;
  map: MapLibreMap;
  neighborhoodOverlay: AppMapNeighborhoodOverlay;
  selectedAreaId?: string | null;
}) {
  const areaSource = map.getSource("launchpad-areas") as GeoJSONSource | undefined;
  areaSource?.setData((areaLayer?.geojson ?? EMPTY_FEATURE_COLLECTION) as never);

  if (map.getLayer("launchpad-areas-fill")) {
    map.setPaintProperty(
      "launchpad-areas-fill",
      "fill-color",
      buildAreaFillColorExpression(colors) as never,
    );
    map.setPaintProperty(
      "launchpad-areas-fill",
      "fill-opacity",
      buildAreaFillOpacityExpression(neighborhoodOverlay) as never,
    );
  }

  if (map.getLayer("launchpad-area-outline")) {
    map.setPaintProperty(
      "launchpad-area-outline",
      "line-color",
      buildAreaOutlineColorExpression(colors, selectedAreaId) as never,
    );
    map.setPaintProperty(
      "launchpad-area-outline",
      "line-width",
      buildAreaOutlineWidthExpression(neighborhoodOverlay, selectedAreaId) as never,
    );
  }

  const areaVisible = neighborhoodOverlay.defaultVisible;
  setLayerVisibility(map, "launchpad-areas-fill", areaVisible);
  setLayerVisibility(map, "launchpad-area-outline", areaVisible);
}

function addPointLayers({
  colors,
  featureVisibility,
  map,
  shouldCluster,
  styleAssets,
}: {
  colors: AppMapSceneColors;
  featureVisibility: AppMapFeatureVisibility;
  map: MapLibreMap;
  shouldCluster: boolean;
  styleAssets: AppMapStyleAssets;
}) {
  if (shouldCluster) {
    map.addLayer({
      id: "launchpad-clusters",
      type: "circle",
      source: "launchpad-points",
      minzoom: featureVisibility.pointVisibilityZoom,
      filter: ["has", "point_count"],
      paint: {
        "circle-color": colors.clusterFill,
        "circle-opacity": buildPointOpacityExpression({
          featureVisibility,
          visibleOpacity: 0.92,
        }) as never,
        "circle-radius": [
          "step",
          ["get", "point_count"],
          18,
          25,
          22,
          75,
          26,
        ],
        "circle-stroke-color": colors.clusterStroke,
        "circle-stroke-width": 1.4,
      },
    });

    map.addLayer({
      id: "launchpad-cluster-count",
      type: "symbol",
      source: "launchpad-points",
      minzoom: featureVisibility.pointVisibilityZoom,
      filter: ["has", "point_count"],
      layout: {
        "text-field": "{point_count_abbreviated}",
        "text-font": styleAssets.clusterLabelFontStack,
        "text-size": 12,
      },
      paint: {
        "text-color": colors.clusterLabel,
        "text-opacity": buildPointOpacityExpression({
          featureVisibility,
          visibleOpacity: 1,
        }) as never,
      },
    });
  }

  map.addLayer({
    id: "launchpad-points-halo",
    type: "circle",
    source: "launchpad-points",
    minzoom: featureVisibility.pointVisibilityZoom,
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": colors.pointHalo,
      "circle-opacity": buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 0.9,
      }) as never,
      "circle-radius": [
        "case",
        ["==", ["get", "selected"], true],
        9,
        6,
      ],
    },
  });

  map.addLayer({
    id: "launchpad-unclustered-points",
    type: "circle",
    source: "launchpad-points",
    minzoom: featureVisibility.pointVisibilityZoom,
    filter: ["!", ["has", "point_count"]],
    paint: {
      "circle-color": ["get", "color"],
      "circle-opacity": buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 0.96,
      }) as never,
      "circle-radius": [
        "case",
        ["==", ["get", "selected"], true],
        7,
        4.8,
      ],
      "circle-stroke-color": colors.pointStroke,
      "circle-stroke-width": 1.45,
    },
  });
}

export function syncPointScene({
  colors,
  featureVisibility,
  map,
  pointData,
  pointDensity,
  previousClustered,
  shouldCluster,
  styleAssets,
}: {
  colors: AppMapSceneColors;
  featureVisibility: AppMapFeatureVisibility;
  map: MapLibreMap;
  pointData: GeoJsonFeatureCollection;
  pointDensity: AppMapPointDensity;
  previousClustered: boolean | null;
  shouldCluster: boolean;
  styleAssets: AppMapStyleAssets;
}) {
  const needsRebuild =
    previousClustered === null ||
    previousClustered !== shouldCluster ||
    !map.getSource("launchpad-points");

  if (needsRebuild) {
    removeLayerIfPresent(map, "launchpad-cluster-count");
    removeLayerIfPresent(map, "launchpad-clusters");
    removeLayerIfPresent(map, "launchpad-unclustered-points");
    removeLayerIfPresent(map, "launchpad-points-halo");
    removeSourceIfPresent(map, "launchpad-points");

    map.addSource("launchpad-points", {
      type: "geojson",
      data: pointData as never,
      cluster: shouldCluster,
      clusterMaxZoom: pointDensity.clusterMaxZoom,
      clusterRadius: pointDensity.clusterRadius,
    });

    addPointLayers({
      colors,
      featureVisibility,
      map,
      shouldCluster,
      styleAssets,
    });

    return shouldCluster;
  }

  const pointSource = map.getSource("launchpad-points") as GeoJSONSource | undefined;
  pointSource?.setData(pointData as never);

  if (map.getLayer("launchpad-clusters")) {
    map.setPaintProperty("launchpad-clusters", "circle-color", colors.clusterFill);
    map.setPaintProperty("launchpad-clusters", "circle-stroke-color", colors.clusterStroke);
    map.setPaintProperty(
      "launchpad-clusters",
      "circle-opacity",
      buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 0.92,
      }) as never,
    );
  }

  if (map.getLayer("launchpad-cluster-count")) {
    map.setPaintProperty("launchpad-cluster-count", "text-color", colors.clusterLabel);
    map.setPaintProperty(
      "launchpad-cluster-count",
      "text-opacity",
      buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 1,
      }) as never,
    );
  }

  if (map.getLayer("launchpad-points-halo")) {
    map.setPaintProperty("launchpad-points-halo", "circle-color", colors.pointHalo);
    map.setPaintProperty(
      "launchpad-points-halo",
      "circle-opacity",
      buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 0.9,
      }) as never,
    );
  }

  if (map.getLayer("launchpad-unclustered-points")) {
    map.setPaintProperty("launchpad-unclustered-points", "circle-stroke-color", colors.pointStroke);
    map.setPaintProperty(
      "launchpad-unclustered-points",
      "circle-opacity",
      buildPointOpacityExpression({
        featureVisibility,
        visibleOpacity: 0.96,
      }) as never,
    );
  }

  return previousClustered;
}
