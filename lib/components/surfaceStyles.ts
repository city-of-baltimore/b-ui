import { alpha, type Theme } from "@mui/material/styles";

export type SectionSurfacePadding = "compact" | "default" | "roomy";
export type SectionSurfaceTone = "default" | "soft" | "hero" | "brand";

declare module "@mui/material/styles" {
    interface Theme {
        launchpadTokens: {
            focusRing: string;
            radii: {
                control: number;
                overlay: number;
                pill: number;
                surface: number;
            };
            chart: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
    }

    interface ThemeOptions {
        launchpadTokens?: {
            focusRing?: string;
            radii?: {
                control: number;
                overlay: number;
                pill: number;
                surface: number;
            };
            chart?: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
    }
}

const paddingByVariant: Record<SectionSurfacePadding, object> = {
    compact: { p: { xs: 2, sm: 2.5 } },
    default: { p: { xs: 2.5, sm: 3 } },
    roomy: { p: { xs: 3, sm: 4 } },
};

export function buildSectionSurfaceSx(
    theme: Theme,
    {
        padding = "default",
        tone = "default",
    }: {
        padding?: SectionSurfacePadding;
        tone?: SectionSurfaceTone;
    } = {},
) {
    const backgroundByTone: Record<SectionSurfaceTone, string> = {
        default: theme.palette.background.paper,
        soft: "var(--lp-surface-gradient-soft)",
        hero: "var(--lp-surface-gradient-hero)",
        brand:
            theme.palette.mode === "dark"
                ? "linear-gradient(180deg, rgba(29, 36, 52, 1) 0%, rgba(42, 34, 55, 1) 100%)"
                : "linear-gradient(180deg, rgba(243, 238, 249, 1) 0%, rgba(255, 255, 255, 1) 100%)",
    };

    return {
        ...paddingByVariant[padding],
        borderRadius: `${theme.launchpadTokens.radii.surface}px`,
        border: `1px solid ${tone === "default" ? "var(--lp-border-default)" : "var(--lp-border-soft)"
            }`,
        background: backgroundByTone[tone],
        boxShadow: "var(--lp-shadow-surface)",
        position: "relative",
        overflow: "hidden",
    };
}

export function buildInsetPanelSx(theme: Theme) {
    return {
        borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
        border: "1px solid var(--lp-border-soft)",
        background: "var(--lp-inset-gradient)",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.22)",
        p: { xs: 2, sm: 2.5 },
    };
}

export function buildSummaryCardSx(
    theme: Theme,
    {
        interactive = false,
        tone = "default",
        selected = false,
    }: {
        interactive?: boolean;
        tone?: "default" | "accent";
        selected?: boolean;
    } = {},
) {
    return {
        minHeight: "100%",
        width: "100%",
        textAlign: "left",
        background:
            tone === "accent" ? "var(--lp-summary-accent-gradient)" : "var(--lp-summary-soft-gradient)",
        borderColor: selected ? alpha(theme.palette.primary.main, 0.32) : "var(--lp-border-soft)",
        boxShadow: selected
            ? `0 18px 36px ${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.18 : 0.12)}`
            : "var(--lp-shadow-surface)",
        cursor: interactive ? "pointer" : "default",
        transition: theme.transitions.create(["border-color", "box-shadow", "transform"], {
            duration: theme.transitions.duration.shorter,
        }),
        ...(interactive
            ? {
                "&:hover": {
                    borderColor: alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.34 : 0.28),
                    boxShadow: `0 18px 36px ${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.16 : 0.1)}`,
                    transform: "translateY(-1px)",
                },
                "&:focus-visible": {
                    outline: "var(--lp-focus-width) solid var(--lp-focus-ring)",
                    outlineOffset: "var(--lp-focus-offset)",
                },
            }
            : {}),
    };
}

export function buildStatusBannerSx(
    theme: Theme,
    tone: "info" | "warning" | "error" | "success",
) {
    const toneMap = {
        info: {
            background: "var(--lp-status-info-bg)",
            border: "var(--lp-status-info-border)",
            color: theme.palette.info.main,
        },
        success: {
            background: "var(--lp-status-success-bg)",
            border: "var(--lp-status-success-border)",
            color: theme.palette.success.main,
        },
        warning: {
            background: "var(--lp-status-warning-bg)",
            border: "var(--lp-status-warning-border)",
            color: theme.palette.warning.dark,
        },
        error: {
            background: "var(--lp-status-error-bg)",
            border: "var(--lp-status-error-border)",
            color: theme.palette.error.main,
        },
    } as const;

    const resolved = toneMap[tone];

    return {
        borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
        border: `1px solid ${resolved.border}`,
        backgroundColor: resolved.background,
        color: theme.palette.text.primary,
        "& .MuiAlert-icon": {
            color: resolved.color,
        },
        "& .MuiAlertTitle-root": {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.h6.fontFamily,
            fontWeight: 700,
            marginBottom: theme.spacing(0.5),
        },
        "& .MuiAlert-message": {
            color: theme.palette.text.primary,
        },
        "& .MuiButton-root": {
            alignSelf: "center",
        },
    };
}

export function buildFixedChromeSx(
    theme: Theme,
    options: { footer?: boolean } = {},
) {
    const isFooter = options.footer ?? false;

    return {
        backgroundColor: alpha(theme.palette.primary.dark, theme.palette.mode === "dark" ? 0.94 : 0.9),
        color: "var(--lp-header-foreground)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: isFooter ? "none" : `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
        borderTop: isFooter ? `1px solid ${alpha(theme.palette.common.white, 0.12)}` : "none",
        boxShadow: isFooter ? "var(--lp-shadow-footer)" : "var(--lp-shadow-header)",
    };
}

export function buildChromeUtilityButtonSx(theme: Theme) {
    return {
        borderRadius: `${theme.launchpadTokens.radii.control}px`,
        border: `1px solid ${alpha(theme.palette.common.white, 0.18)}`,
        backgroundColor: alpha(theme.palette.common.white, 0.08),
        color: "var(--lp-header-foreground)",
        minWidth: 46,
        height: 46,
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.16),
            borderColor: alpha(theme.palette.common.white, 0.24),
        },
        "&:focus-visible": {
            outline: "var(--lp-focus-width) solid var(--lp-focus-ring)",
            outlineOffset: "var(--lp-focus-offset)",
        },
    };
}

export function buildMapActionButtonSx(theme: Theme) {
    const isDark = theme.palette.mode === "dark";

    return {
        whiteSpace: "nowrap",
        borderRadius: `${theme.launchpadTokens.radii.control}px`,
        borderColor: alpha(theme.palette.primary.main, isDark ? 0.32 : 0.24),
        backgroundColor: isDark
            ? alpha(theme.palette.background.paper, 0.84)
            : alpha(theme.palette.common.white, 0.94),
        color: theme.palette.text.primary,
        boxShadow: "none",
        "&:hover": {
            borderColor: alpha(theme.palette.primary.main, isDark ? 0.4 : 0.32),
            backgroundColor: isDark
                ? alpha(theme.palette.background.paper, 0.92)
                : alpha(theme.palette.common.white, 0.98),
            boxShadow: "none",
        },
        "&:focus-visible": {
            outline: "var(--lp-focus-width) solid var(--lp-focus-ring)",
            outlineOffset: "var(--lp-focus-offset)",
        },
    };
}

export function buildBannerSupportTextSx(theme: Theme) {
    return {
        alignSelf: "flex-start",
        color: alpha(theme.palette.common.white, 0.82),
        maxWidth: 360,
    };
}

export function buildStateSurfaceSx(
    theme: Theme,
    kind: "default" | "error" = "default",
) {
    return {
        borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
        border: `1px solid ${kind === "error" ? "var(--lp-status-error-border)" : "var(--lp-border-soft)"
            }`,
        background: kind === "error" ? "var(--lp-status-error-bg)" : "var(--lp-empty-state-bg)",
        p: { xs: 2.5, sm: 3 },
    };
}
