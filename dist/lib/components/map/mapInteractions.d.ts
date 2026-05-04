import { Map as MapLibreMap } from 'maplibre-gl';
export declare function bindAppMapInteractions({ map, onSelectArea, onSelectPoint, }: {
    map: MapLibreMap;
    onSelectArea?: (areaId: string | null) => void;
    onSelectPoint: (pointId: string) => void;
}): () => void;
