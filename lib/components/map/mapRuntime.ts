type MapLibreModule = typeof import("maplibre-gl");

export type MapLibreRuntime = MapLibreModule;

let runtimePromise: Promise<MapLibreRuntime> | null = null;

/**
 * Loads the heavy MapLibre runtime behind one shared seam so AppMap can stay a
 * thin product-surface wrapper.
 */
export function loadMapLibreRuntime() {
  if (!runtimePromise) {
    runtimePromise = import("maplibre-gl");
  }

  return runtimePromise;
}
