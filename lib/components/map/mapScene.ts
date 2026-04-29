import type { StyleSpecification, Map as MapLibreMap } from "maplibre-gl";

import type { MapLibreRuntime } from "./mapRuntime";

export function createAppMapScene({
  center,
  container,
  mapStyle,
  maplibre,
  maxBounds,
  maxZoom,
  minZoom,
  zoom,
}: {
  center: [number, number];
  container: HTMLDivElement;
  mapStyle: StyleSpecification;
  maplibre: MapLibreRuntime;
  maxBounds: [[number, number], [number, number]];
  maxZoom: number;
  minZoom: number;
  zoom: number;
}) {
  const map = new maplibre.Map({
    container,
    style: mapStyle as never,
    center,
    zoom,
    minZoom,
    maxZoom,
    maxBounds,
    attributionControl: false,
    dragRotate: false,
    pitchWithRotate: false,
  });

  map.addControl(new maplibre.NavigationControl({ showCompass: false }), "bottom-right");
  map.addControl(new maplibre.AttributionControl({ compact: true }), "bottom-right");

  return map;
}

export function destroyAppMapScene(map: MapLibreMap | null) {
  map?.remove();
}
