import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { buildStateSurfaceSx } from "../../surfaceStyles";

export function AppTableEmptyState() {
    const theme = useTheme();

    return (
        <Box sx={buildStateSurfaceSx(theme)}>
            <Stack spacing={1}>
                <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                    No records in the current slice
                </Typography>
                <Typography component="p" variant="h6">
                    Try widening the current filters.
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    Launchpad keeps empty states intentional so the shared shell still
                    feels trustworthy when a slice returns no matching records.
                </Typography>
            </Stack>
        </Box>
    );
}
