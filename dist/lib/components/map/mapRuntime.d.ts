type MapLibreModule = typeof import("maplibre-gl");
export type MapLibreRuntime = MapLibreModule;
/**
 * Loads the heavy MapLibre runtime behind one shared seam so AppMap can stay a
 * thin product-surface wrapper.
 */
export declare function loadMapLibreRuntime(): Promise<typeof import("maplibre-gl")>;
export {};
