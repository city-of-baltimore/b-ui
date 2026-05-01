import { Box, Stack, Typography, type TypographyProps } from "@mui/material";
import type { ReactNode } from "react";


export type SurfaceHeaderProps = {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    testId?: string;
    titleVariant?: TypographyProps["variant"];
    titleComponent?: TypographyProps["component"];
};

export function SurfaceHeader({
    eyebrow,
    title,
    description,
    actions,
    testId,
    titleVariant = "h4",
    titleComponent,
}: SurfaceHeaderProps) {
    const titleComponentProps = titleComponent ? { component: titleComponent } : {};

    return (
        <Stack
            // alignItems={{ md: "flex-start" }}
            data-testid={testId}
            direction={{ xs: "column", md: "row" }}
            // justifyContent="space-between"
            spacing={{ xs: 1.5, md: 2.5 }}
        >
            <Box sx={{ flex: "1 1 auto", minWidth: 0 }}>
                {eyebrow ? (
                    <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                        {eyebrow}
                    </Typography>
                ) : null}
                <Typography
                    {...titleComponentProps}
                    sx={{
                        mt: eyebrow ? 0.75 : 0,
                        textWrap: "balance",
                    }}
                    variant={titleVariant}
                >
                    {title}
                </Typography>
                {typeof description === "string" ? (
                    <Typography sx={{ mt: 1, maxWidth: 760 }} variant="body2">
                        {description}
                    </Typography>
                ) : description ? (
                    <Box sx={{ mt: 1, maxWidth: 760 }}>{description}</Box>
                ) : null}
            </Box>
            {actions ? <Box sx={{ flexShrink: 0, width: { xs: "100%", md: "auto" } }}>{actions}</Box> : null}
        </Stack>
    );
}
