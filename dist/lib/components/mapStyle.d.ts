import { StyleSpecification } from 'maplibre-gl';
type BasemapStyleDefinition = {
    id: string;
    tileSize: number;
    maxZoom: number;
    tiles: string[];
};
export declare function buildBasemapStyle(styleDefinition: BasemapStyleDefinition, { attribution, backgroundColor, glyphsUrl, }: {
    attribution: string;
    backgroundColor: string;
    glyphsUrl: string;
}): StyleSpecification;
export {};
