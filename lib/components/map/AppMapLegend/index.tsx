import { Box, Stack, Typography } from "@mui/material";
import { alpha, type Theme } from "@mui/material/styles";

import { buildInsetPanelSx } from "../../surfaceStyles";
import type { AppMapPointLayerState } from "../mapPolicy";
import type { AppMapAreaLayer } from "../types";

export function AppMapLegend({
    areaLayer,
    legendTitles,
    pointLayerState,
    statusColors,
    theme,
}: {
    areaLayer?: AppMapAreaLayer | null;
    legendTitles?: {
        areaTitle: string;
        pointTitle: string;
    };
    pointLayerState: AppMapPointLayerState;
    statusColors: Record<string, string>;
    theme: Theme;
}) {
    return (
        <Stack
            className="lp-map-legend"
            data-testid="app-map-legend"
            // gap={1.5}
            sx={{ mt: 1.5, p: 1.5 }}
        >
            {areaLayer ? (
                <Box>
                    <Typography variant="body2">
                        {legendTitles?.areaTitle ?? "Neighborhood choropleth"}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mt: 0.5 }} variant="caption">
                        {areaLayer.legend.title}
                    </Typography>
                    <Stack direction="row"
                        //flexWrap="wrap" gap={1} 
                        sx={{ mt: 1 }}>
                        {areaLayer.legend.stops.map((stop, index) => (
                            <Stack
                                // alignItems="center" 
                                direction="row"
                                // gap={0.75} 
                                key={stop.classIndex}>
                                <Box
                                    sx={{
                                        width: 16,
                                        height: 16,
                                        borderRadius: `${theme.launchpadTokens.radii.control - 8}px`,
                                        backgroundColor: `var(--lp-map-choropleth-${index + 1})`,
                                        border: `1px solid ${alpha(theme.palette.text.primary, theme.palette.mode === "dark" ? 0.24 : 0.14)}`,
                                    }}
                                />
                                <Typography variant="caption">{stop.label}</Typography>
                            </Stack>
                        ))}
                        <Stack
                            //alignItems="center" 
                            direction="row"
                        // gap={0.75} 
                        >
                            <Box
                                sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: `${theme.launchpadTokens.radii.control - 8}px`,
                                    backgroundColor: "var(--lp-map-choropleth-no-data)",
                                    border: `1px solid ${alpha(theme.palette.text.primary, theme.palette.mode === "dark" ? 0.24 : 0.14)}`,
                                }}
                            />
                            <Typography variant="caption">{areaLayer.legend.noDataLabel}</Typography>
                        </Stack>
                    </Stack>
                </Box>
            ) : null}

            <Box sx={buildInsetPanelSx(theme)}>
                <Typography variant="body2">
                    {legendTitles?.pointTitle ?? "Individual requests"}
                </Typography>
                <Typography
                    color="text.secondary"
                    data-testid="app-map-point-visibility-hint"
                    sx={{ mt: 0.5 }}
                    variant="caption"
                >
                    {pointLayerState.hint}
                </Typography>
                <Stack direction="row"
                    //flexWrap="wrap" gap={1.25} 
                    sx={{ mt: 1 }}>
                    {Object.entries(statusColors)
                        .filter(([key]) => key !== "default")
                        .slice(0, 6)
                        .map(([label, color]) => (
                            <Stack
                                // alignItems="center" 
                                // direction="row" gap={0.75} 
                                key={label}>
                                <Box
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: `${theme.launchpadTokens.radii.control - 8}px`,
                                        backgroundColor: color,
                                        border: `1px solid ${alpha(theme.palette.text.primary, theme.palette.mode === "dark" ? 0.24 : 0.14)}`,
                                    }}
                                />
                                <Typography variant="caption">{label}</Typography>
                            </Stack>
                        ))}
                </Stack>
                <Typography
                    color="text.secondary"
                    data-testid="app-map-point-layer-state"
                    sx={{ mt: 1 }}
                    variant="caption"
                >
                    {pointLayerState.text}
                </Typography>
            </Box>
        </Stack>
    );
}
