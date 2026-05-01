type Geometry = {
    type: string;
    coordinates: unknown;
};

export function geometryBounds(
    geometry?: Geometry | null,
): [[number, number], [number, number]] | null {
    if (!geometry) {
        return null;
    }

    const coordinates: Array<[number, number]> = [];
    collectCoordinates(geometry.coordinates, coordinates);
    if (!coordinates.length) {
        return null;
    }

    const longitudes = coordinates.map((coordinate) => coordinate[0]);
    const latitudes = coordinates.map((coordinate) => coordinate[1]);
    return [
        [Math.min(...longitudes), Math.min(...latitudes)],
        [Math.max(...longitudes), Math.max(...latitudes)],
    ];
}

export function featureBounds(
    feature?: {
        bbox?: number[] | null;
        geometry?: Geometry | null;
    } | null,
): [[number, number], [number, number]] | null {
    if (feature?.bbox && feature.bbox.length === 4) {
        return [
            [feature.bbox[0] ?? 0, feature.bbox[1] ?? 0],
            [feature.bbox[2] ?? 0, feature.bbox[3] ?? 0],
        ];
    }
    return geometryBounds(feature?.geometry);
}

export function boundsCenter(
    bounds: [[number, number], [number, number]] | null,
): [number, number] | null {
    if (!bounds) {
        return null;
    }
    return [
        (bounds[0][0] + bounds[1][0]) / 2,
        (bounds[0][1] + bounds[1][1]) / 2,
    ];
}

function collectCoordinates(value: unknown, coordinates: Array<[number, number]>) {
    if (!Array.isArray(value)) {
        return;
    }

    if (
        value.length >= 2 &&
        typeof value[0] === "number" &&
        typeof value[1] === "number"
    ) {
        coordinates.push([value[0], value[1]]);
        return;
    }

    for (const item of value) {
        collectCoordinates(item, coordinates);
    }
}
