import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ElementType } from "react";

import { SectionSurface } from "../SectionSurface";
import { buildStateSurfaceSx } from "../surfaceStyles";


type ErrorStateProps = {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    requestId?: string;
    supportEmail?: string;
    supportLabel?: string;
    supportPhone?: string;
    testId?: string;
    titleComponent?: ElementType;
};

export function ErrorState({
    title,
    description,
    actionLabel,
    onAction,
    requestId,
    supportEmail,
    supportLabel,
    supportPhone,
    testId = "error-state",
    titleComponent = "h2",
}: ErrorStateProps) {
    const theme = useTheme();
    const hasSupportCopy = Boolean(requestId || supportEmail || supportPhone);

    return (
        <SectionSurface data-testid={testId} padding="roomy" tone="soft">
            <Box sx={buildStateSurfaceSx(theme, "error")}>
                <Stack spacing={1.5}>
                    <Typography component="p" sx={{ color: theme.palette.error.main }} variant="subtitle2">
                        Surface error
                    </Typography>
                    <Typography component={titleComponent} variant="h5">
                        {title}
                    </Typography>
                    <Typography color="text.secondary">{description}</Typography>
                    {hasSupportCopy ? (
                        <Stack data-testid="error-state-support" spacing={0.75}>
                            {requestId ? (
                                <Typography color="text.secondary" data-testid="error-state-request-id" variant="body2">
                                    Request ID:{" "}
                                    <Box
                                        component="span"
                                        sx={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace" }}
                                    >
                                        {requestId}
                                    </Box>
                                </Typography>
                            ) : null}
                            {supportEmail || supportPhone ? (
                                <Typography color="text.secondary" data-testid="error-state-support-copy" variant="body2">
                                    {supportLabel ?? "Support"}:{" "}
                                    {supportEmail ? (
                                        <Link color="inherit" href={`mailto:${supportEmail}`}>
                                            {supportEmail}
                                        </Link>
                                    ) : null}
                                    {supportEmail && supportPhone ? " • " : null}
                                    {supportPhone ? (
                                        <Link color="inherit" href={`tel:${supportPhone.replace(/[^+\d]/g, "")}`}>
                                            {supportPhone}
                                        </Link>
                                    ) : null}
                                </Typography>
                            ) : null}
                        </Stack>
                    ) : null}
                    {actionLabel && onAction ? (
                        <Button color="error" onClick={onAction} variant="outlined">
                            {actionLabel}
                        </Button>
                    ) : null}
                </Stack>
            </Box>
        </SectionSurface>
    );
}
