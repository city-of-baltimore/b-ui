import type { GeoJSONSource, Map as MapLibreMap, MapLayerMouseEvent } from "maplibre-gl";

export function bindAppMapInteractions({
  map,
  onSelectArea,
  onSelectPoint,
}: {
  map: MapLibreMap;
  onSelectArea?: (areaId: string | null) => void;
  onSelectPoint: (pointId: string) => void;
}) {
  const showPointer = () => {
    map.getCanvas().style.cursor = "pointer";
  };

  const clearPointer = () => {
    map.getCanvas().style.cursor = "";
  };

  const handleClusterClick = (event: MapLayerMouseEvent) => {
    const clusterId = Number(event.features?.[0]?.properties?.cluster_id);
    if (!Number.isFinite(clusterId)) {
      return;
    }

    const pointSource = map.getSource("launchpad-points") as GeoJSONSource | undefined;
    if (!pointSource) {
      return;
    }

    void pointSource
      .getClusterExpansionZoom(clusterId)
      .then((nextZoom) => {
        map.easeTo({
          center: [event.lngLat.lng, event.lngLat.lat],
          zoom: nextZoom,
          duration: 420,
        });
      })
      .catch(() => {
        // Ignore expansion failures and keep the broader explorer responsive.
      });
  };

  const handleAreaClick = (event: MapLayerMouseEvent) => {
    const areaId = event.features?.[0]?.properties?.nsa_id;
    if (typeof areaId === "string") {
      onSelectArea?.(areaId);
    }
  };

  const handlePointClick = (event: MapLayerMouseEvent) => {
    const pointId = event.features?.[0]?.properties?.id;
    if (typeof pointId === "string") {
      onSelectPoint(pointId);
    }
  };

  for (const layerId of [
    "launchpad-areas-fill",
    "launchpad-area-outline",
    "launchpad-clusters",
    "launchpad-unclustered-points",
  ]) {
    map.on("mouseenter", layerId, showPointer);
    map.on("mouseleave", layerId, clearPointer);
  }

  map.on("click", "launchpad-clusters", handleClusterClick);
  map.on("click", "launchpad-areas-fill", handleAreaClick);
  map.on("click", "launchpad-area-outline", handleAreaClick);
  map.on("click", "launchpad-unclustered-points", handlePointClick);

  return () => {
    for (const layerId of [
      "launchpad-areas-fill",
      "launchpad-area-outline",
      "launchpad-clusters",
      "launchpad-unclustered-points",
    ]) {
      map.off("mouseenter", layerId, showPointer);
      map.off("mouseleave", layerId, clearPointer);
    }

    map.off("click", "launchpad-clusters", handleClusterClick);
    map.off("click", "launchpad-areas-fill", handleAreaClick);
    map.off("click", "launchpad-area-outline", handleAreaClick);
    map.off("click", "launchpad-unclustered-points", handlePointClick);
    clearPointer();
  };
}
