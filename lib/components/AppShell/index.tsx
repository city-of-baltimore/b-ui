import { Box, Container, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import { useEffect, type PropsWithChildren, type ReactNode } from "react";

import { useRuntimeConfig } from "../runtimeConfig";
import { messages } from "../i18n/messages";
import { AppFooter } from "../AppFooter";
import { AppHeader } from "../AppHeader";
import { PageBanner } from "../PageBanner";


type AppShellProps = PropsWithChildren<{
    actions?: ReactNode;
    eyebrow: string;
    subtitle: string;
    supportingText?: string;
    title: string;
}>;

export function AppShell({
    actions,
    eyebrow,
    subtitle,
    supportingText,
    title,
    children,
}: AppShellProps) {
    const { auth, product } = useRuntimeConfig();
    const theme = useTheme();

    useEffect(() => {
        document.title = `${title} | ${product.application.title}`;
    }, [product.application.title, title]);

    return (
        <Box className="lp-app-shell" data-testid="app-shell" sx={{ minHeight: "100vh" }}>
            <Box
                component="a"
                href="#main-content"
                sx={{
                    ...visuallyHidden,
                    "&:focus": {
                        clip: "auto",
                        width: "auto",
                        height: "auto",
                        left: 16,
                        top: 16,
                        padding: 1.5,
                        borderRadius: `${theme.launchpadTokens.radii.control}px`,
                        backgroundColor: "var(--lp-brand-accent)",
                        color: theme.palette.primary.dark,
                        position: "fixed",
                        zIndex: 1400,
                    },
                }}
            >
                {messages.app.skipToMainContent}
            </Box>

            <AppHeader
                appearanceModes={product.theming.modes}
                cityName={product.application.cityName}
                homePath={product.navigation.homePath}
                maxWidthPx={product.surfaces.shellMaxWidthPx}
                productTitle={product.application.title}
                showStaffLink={auth.advertiseStaffTools}
                staffLabel={product.navigation.staffLabel}
                staffPath={product.navigation.staffPath}
            />

            <Box
                aria-live="polite"
                key={title}
                role="status"
                sx={visuallyHidden}
            >
                {title}
            </Box>

            <PageBanner
                actions={actions}
                eyebrow={eyebrow}
                maxWidthPx={product.surfaces.shellMaxWidthPx}
                subtitle={subtitle}
                supportingText={supportingText ?? product.application.subtitle}
                title={title}
            />

            <Container
                className="lp-app-shell__main"
                component="main"
                id="main-content"
                maxWidth={false}
                sx={{
                    maxWidth: product.surfaces.contentMaxWidthPx,
                    px: { xs: 2, sm: 3 },
                    py: { xs: 3, md: 4 },
                    position: "relative",
                }}
                tabIndex={-1}
            >
                <Stack spacing={3}>{children}</Stack>
            </Container>

            <AppFooter
                cityName={product.application.cityName}
                maxWidthPx={product.surfaces.shellMaxWidthPx}
                productTitle={product.application.title}
                supportEmail={product.languageAccess.email}
                supportLabel={product.languageAccess.supportLabel}
                supportPhone={product.languageAccess.phone}
            />
        </Box>
    );
}
