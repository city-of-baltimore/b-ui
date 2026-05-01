import { Box, Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ElementType } from "react";

import { SectionSurface } from "../SectionSurface";
import { buildStateSurfaceSx } from "../surfaceStyles";


type EmptyStateProps = {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    testId?: string;
    titleComponent?: ElementType;
};

export function EmptyState({
    title,
    description,
    actionLabel,
    onAction,
    testId = "empty-state",
    titleComponent = "h2",
}: EmptyStateProps) {
    const theme = useTheme();

    return (
        <SectionSurface data-testid={testId} padding="roomy" tone="soft">
            <Box sx={buildStateSurfaceSx(theme)}>
                <Stack spacing={1.5}>
                    <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                        No results yet
                    </Typography>
                    <Typography component={titleComponent} variant="h5">
                        {title}
                    </Typography>
                    <Typography color="text.secondary">{description}</Typography>
                    {actionLabel && onAction ? (
                        <Button onClick={onAction} variant="outlined">
                            {actionLabel}
                        </Button>
                    ) : null}
                </Stack>
            </Box>
        </SectionSurface>
    );
}
