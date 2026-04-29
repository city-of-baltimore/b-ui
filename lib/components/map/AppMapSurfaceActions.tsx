import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import type { Theme } from "@mui/material/styles";

import { buildMapActionButtonSx } from "../surfaceStyles";
import type { AppMapAreaLayer } from "./types";

export function AppMapSurfaceActions({
  areaLayer,
  onMetricChange,
  onResetView,
  theme,
}: {
  areaLayer?: AppMapAreaLayer | null;
  onMetricChange?: (metricId: string) => void;
  onResetView?: () => void;
  theme: Theme;
}) {
  if (!areaLayer?.availableMetrics.length && !onResetView) {
    return null;
  }

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      sx={{ width: { xs: "100%", md: "auto" } }}
    >
      {areaLayer?.availableMetrics.length ? (
        <FormControl size="small" sx={{ minWidth: { xs: "100%", sm: 220 } }}>
          <InputLabel id="app-map-metric-label">Neighborhood metric</InputLabel>
          <Select
            data-testid="app-map-metric-select"
            label="Neighborhood metric"
            labelId="app-map-metric-label"
            value={areaLayer.metric.id}
            onChange={(event) => onMetricChange?.(String(event.target.value))}
          >
            {areaLayer.availableMetrics.map((metric) => (
              <MenuItem key={metric.id} value={metric.id}>
                {metric.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
      {onResetView ? (
        <Button
          data-testid="app-map-reset"
          sx={buildMapActionButtonSx(theme)}
          variant="outlined"
          onClick={onResetView}
        >
          Reset to citywide
        </Button>
      ) : null}
    </Stack>
  );
}
