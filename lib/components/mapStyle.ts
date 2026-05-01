import type { StyleSpecification } from "maplibre-gl";


type BasemapStyleDefinition = {
    id: string;
    tileSize: number;
    maxZoom: number;
    tiles: string[];
};

export function buildBasemapStyle(
    styleDefinition: BasemapStyleDefinition,
    {
        attribution,
        backgroundColor,
        glyphsUrl,
    }: {
        attribution: string;
        backgroundColor: string;
        glyphsUrl: string;
    },
): StyleSpecification {
    return {
        version: 8,
        glyphs: glyphsUrl,
        sources: {
            basemap: {
                type: "raster",
                attribution,
                tiles: styleDefinition.tiles,
                tileSize: styleDefinition.tileSize,
                maxzoom: styleDefinition.maxZoom,
            },
        },
        layers: [
            {
                id: "background",
                type: "background",
                paint: {
                    "background-color": backgroundColor,
                },
            },
            {
                id: "basemap",
                type: "raster",
                source: "basemap",
            },
        ],
    };
}
