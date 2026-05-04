import { StyleSpecification, Map as MapLibreMap } from 'maplibre-gl';
import { MapLibreRuntime } from './mapRuntime';
export declare function createAppMapScene({ center, container, mapStyle, maplibre, maxBounds, maxZoom, minZoom, zoom, }: {
    center: [number, number];
    container: HTMLDivElement;
    mapStyle: StyleSpecification;
    maplibre: MapLibreRuntime;
    maxBounds: [[number, number], [number, number]];
    maxZoom: number;
    minZoom: number;
    zoom: number;
}): MapLibreMap;
export declare function destroyAppMapScene(map: MapLibreMap | null): void;
