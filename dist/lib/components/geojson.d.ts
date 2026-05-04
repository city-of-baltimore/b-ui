type Geometry = {
    type: string;
    coordinates: unknown;
};
export declare function geometryBounds(geometry?: Geometry | null): [[number, number], [number, number]] | null;
export declare function featureBounds(feature?: {
    bbox?: number[] | null;
    geometry?: Geometry | null;
} | null): [[number, number], [number, number]] | null;
export declare function boundsCenter(bounds: [[number, number], [number, number]] | null): [number, number] | null;
export {};
