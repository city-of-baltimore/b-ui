import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ElementType } from "react";

import { SectionSurface } from "../SectionSurface";
import { buildStateSurfaceSx } from "../surfaceStyles";


type LoadingStateProps = {
    title: string;
    description?: string;
    testId?: string;
    titleComponent?: ElementType;
};

export function LoadingState({
    title,
    description,
    testId = "loading-state",
    titleComponent = "h2",
}: LoadingStateProps) {
    const theme = useTheme();

    return (
        <SectionSurface data-testid={testId} padding="roomy" tone="soft">
            <Box sx={buildStateSurfaceSx(theme)}>
                <Stack spacing={1.5}>
                    <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                        Preparing surface
                    </Typography>
                    <Typography component={titleComponent} variant="h5">
                        {title}
                    </Typography>
                    {description ? <Typography color="text.secondary">{description}</Typography> : null}
                </Stack>
            </Box>
        </SectionSurface>
    );
}
