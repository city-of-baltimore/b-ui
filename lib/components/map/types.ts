export type BasemapStyleDefinition = {
  id: string;
  label: string;
  tileSize: number;
  maxZoom: number;
  tiles: string[];
};

export type AppMapPoint = {
  id: string;
  title: string | null;
  status: string | null;
  latitude: number;
  longitude: number;
  nsaId?: string | null;
  nsaName?: string | null;
};

export type AppMapAreaFeature = {
  type: "Feature";
  geometry: {
    type: string;
    coordinates: unknown;
  };
  properties: {
    nsa_id: string;
    nsa_name: string;
    class_index?: number | null;
  };
};

export type AppMapAreaLayer = {
  metric: {
    id: string;
    label: string;
    description: string;
    units: string;
  };
  availableMetrics: Array<{
    id: string;
    label: string;
  }>;
  legend: {
    title: string;
    units: string;
    noDataLabel: string;
    stops: Array<{
      classIndex: number;
      label: string;
    }>;
  };
  geojson: {
    type: "FeatureCollection";
    features: AppMapAreaFeature[];
  };
};

export type AppMapStyleAssets = {
  glyphsUrl: string;
  clusterLabelFontStack: string[];
};

export type AppMapPointDensity = {
  maxRenderedPoints: number;
  clusterThreshold: number;
  clusterRadius: number;
  clusterMaxZoom: number;
};

export type AppMapFeatureVisibility = {
  pointHydrationZoom: number;
  pointFadeStartZoom: number;
  pointVisibilityZoom: number;
  showPointsWhenAreaSelected: boolean;
  showPointsWhenDetailSelected: boolean;
};

export type AppMapNeighborhoodOverlay = {
  defaultVisible: boolean;
  citywideFillOpacity: number;
  detailFillOpacity: number;
  detailOpacityZoom: number;
  selectedOutlineWidth: number;
};

export type AppMapInteractionConfig = {
  citywidePadding: number;
  citywideMaxZoom: number;
  areaFocusPadding: number;
  areaFocusMaxZoom: number;
  pointFocusZoom: number;
};
