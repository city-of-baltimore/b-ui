import { Box, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { BarChart, LineChart } from "@mui/x-charts";
import { useId, type ElementType } from "react";

import { SectionSurface } from "./SectionSurface";
import { SurfaceHeader } from "./SurfaceHeader";
import { buildInsetPanelSx, buildStateSurfaceSx } from "./surfaceStyles";


export type ChartSeries = {
  label: string;
  data: number[];
  color?: string;
};

type AppChartProps = {
  variant: "bar" | "line";
  title: string;
  description?: string;
  categories: string[];
  series: ChartSeries[];
  loading?: boolean;
  testId?: string;
  titleComponent?: ElementType;
};

export function AppChart({
  variant,
  title,
  description,
  categories,
  series,
  loading = false,
  testId,
  titleComponent,
}: AppChartProps) {
  const theme = useTheme();
  const summaryId = useId();
  const palette = [
    theme.launchpadTokens.chart.primary,
    theme.launchpadTokens.chart.secondary,
    theme.launchpadTokens.chart.tertiary,
  ];
  const normalizedSeries = series.map((entry, index) => ({
    ...entry,
    color: entry.color ?? palette[index % palette.length],
  }));
  const summaryTestId = testId ? `${testId}-accessibility-summary` : undefined;
  const chartSummary = loading
    ? `${title} is loading.`
    : !categories.length
      ? `${title} has no chart data in the current slice.`
      : `${title}. ${normalizedSeries
          .slice(0, 1)
          .map((entry) =>
            `${entry.label}: ${categories
              .slice(0, 3)
              .map((category, index) => `${category} ${entry.data[index]?.toLocaleString() ?? "0"}`)
              .join(", ")}.`,
          )
          .join(" ")}`;

  return (
    <SectionSurface aria-describedby={summaryId} data-testid={testId} padding="default" tone="soft">
      <Stack spacing={2.5}>
        <SurfaceHeader
          title={title}
          titleComponent={titleComponent}
          titleVariant="h5"
          description={description}
        />
        <Typography
          component="p"
          data-testid={summaryTestId}
          id={summaryId}
          sx={visuallyHidden}
          variant="body2"
        >
          {chartSummary}
        </Typography>
        {loading ? (
          <Box sx={buildStateSurfaceSx(theme)}>
            <Typography color="text.secondary">Loading chart…</Typography>
          </Box>
        ) : !categories.length ? (
          <Box sx={buildStateSurfaceSx(theme)}>
            <Stack spacing={1}>
              <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                No chart data in the current slice
              </Typography>
              <Typography variant="body2">
                Adjust filters to restore the storytelling-ready chart surface.
              </Typography>
            </Stack>
          </Box>
        ) : (
          <>
            <Box sx={buildInsetPanelSx(theme)}>
              {variant === "bar" ? (
                <BarChart
                  height={300}
                  margin={{ left: 56, right: 20, top: 20, bottom: 40 }}
                  series={normalizedSeries}
                  xAxis={[{ data: categories, scaleType: "band" }]}
                />
              ) : (
                <LineChart
                  height={300}
                  margin={{ left: 56, right: 20, top: 20, bottom: 40 }}
                  series={normalizedSeries}
                  xAxis={[{ data: categories, scaleType: "point" }]}
                />
              )}
            </Box>
            <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={1.25}>
              {categories.slice(0, 4).map((category, index) => (
                <Box
                  key={category}
                  sx={{
                    borderRadius: `${theme.launchpadTokens.radii.control}px`,
                    border: "1px solid var(--lp-border-soft)",
                    backgroundColor:
                      theme.palette.mode === "dark"
                        ? alpha(theme.palette.background.paper, 0.68)
                        : alpha(theme.palette.background.paper, 0.92),
                    minWidth: 0,
                    px: 1.5,
                    py: 1.25,
                  }}
                >
                  <Typography color="text.secondary" variant="caption">
                    {category}
                  </Typography>
                  <Typography variant="body2">
                    {normalizedSeries[0]?.data[index]?.toLocaleString() ?? "0"}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </>
        )}
      </Stack>
    </SectionSurface>
  );
}
