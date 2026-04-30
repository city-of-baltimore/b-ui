import type { PaletteMode } from "@mui/material";
import { alpha, createTheme, responsiveFontSizes } from "@mui/material/styles";

import { getThemeModeDefinition, type LaunchpadResolvedColorMode } from "./themeTokens";

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

const RADII = {
    control: 14,
    surface: 18,
    overlay: 20,
    pill: 999,
} as const;

export function buildTheme(mode: PaletteMode) {
    const tokenSet = getThemeModeDefinition(mode as LaunchpadResolvedColorMode);
    const isDark = mode === "dark";

    return responsiveFontSizes(
        createTheme({
            palette: {
                mode,
                primary: {
                    main: tokenSet.palette.primary,
                    dark: tokenSet.palette.primaryDark,
                    contrastText: "#ffffff",
                },
                secondary: {
                    main: tokenSet.palette.secondary,
                    contrastText: isDark ? tokenSet.palette.textPrimary : tokenSet.palette.primaryDark,
                },
                background: {
                    default: tokenSet.palette.backgroundDefault,
                    paper: tokenSet.palette.backgroundPaper,
                },
                text: {
                    primary: tokenSet.palette.textPrimary,
                    secondary: tokenSet.palette.textSecondary,
                },
                divider: tokenSet.palette.divider,
                warning: {
                    main: tokenSet.palette.warning,
                    light: tokenSet.palette.accentSoft,
                    dark: "#d79f18",
                    contrastText: tokenSet.palette.primaryDark,
                },
                error: {
                    main: tokenSet.palette.error,
                },
                success: {
                    main: tokenSet.palette.success,
                },
                info: {
                    main: tokenSet.palette.info,
                },
            },
            shape: {
                borderRadius: RADII.surface,
            },
            spacing: 8,
            typography: {
                fontFamily: '"Nunito Sans", "Helvetica Neue", sans-serif',
                h1: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 800,
                    letterSpacing: "-0.025em",
                },
                h2: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                },
                h3: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                },
                h4: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                },
                h5: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                },
                h6: {
                    fontFamily: '"Raleway", "Helvetica Neue", sans-serif',
                    fontWeight: 700,
                },
                body1: {
                    fontSize: "1rem",
                    lineHeight: 1.65,
                },
                body2: {
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                },
                caption: {
                    fontSize: "0.75rem",
                    lineHeight: 1.4,
                },
                subtitle2: {
                    textTransform: "uppercase",
                    letterSpacing: "0.18em",
                    fontWeight: 800,
                    fontSize: "0.72rem",
                },
                button: {
                    fontWeight: 700,
                    textTransform: "none",
                },
            },
            components: {
                MuiCssBaseline: {
                    styleOverrides: {
                        body: {
                            backgroundColor: tokenSet.palette.backgroundDefault,
                            color: tokenSet.palette.textPrimary,
                        },
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: RADII.control,
                            paddingInline: 18,
                        },
                        outlined: {
                            borderColor: alpha(tokenSet.palette.primary, isDark ? 0.32 : 0.16),
                            backgroundColor: isDark
                                ? alpha(tokenSet.palette.backgroundPaper, 0.56)
                                : alpha("#ffffff", 0.84),
                        },
                        // TODO xanderjakeq: why is this property missing?
                        // containedPrimary: {
                        //     boxShadow: "none",
                        //     "&:hover": {
                        //         boxShadow: "none",
                        //     },
                        // },
                    },
                },
                MuiChip: {
                    styleOverrides: {
                        root: {
                            borderRadius: RADII.control,
                            fontWeight: 700,
                        },
                    },
                },
                MuiPaper: {
                    styleOverrides: {
                        root: {
                            backgroundImage: "none",
                            border: `1px solid ${tokenSet.palette.divider}`,
                            boxShadow: isDark
                                ? "0 18px 40px rgba(4, 8, 18, 0.38)"
                                : "0 12px 30px rgba(25, 14, 33, 0.08)",
                        },
                    },
                },
                MuiCard: {
                    styleOverrides: {
                        root: {
                            borderRadius: RADII.surface,
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        root: {
                            borderRadius: RADII.control,
                            backgroundColor: alpha(
                                tokenSet.palette.backgroundPaper,
                                isDark ? 0.88 : 0.75,
                            ),
                        },
                    },
                },
                MuiInputLabel: {
                    styleOverrides: {
                        root: {
                            color: tokenSet.palette.textSecondary,
                            "&.Mui-disabled": {
                                color: tokenSet.palette.textSecondary,
                            },
                            "&.Mui-focused": {
                                color: tokenSet.palette.primary,
                            },
                        },
                    },
                },
                MuiMenu: {
                    styleOverrides: {
                        paper: {
                            borderRadius: RADII.overlay,
                            backgroundColor: alpha(
                                tokenSet.palette.surfaceElevated,
                                isDark ? 0.96 : 0.94,
                            ),
                        },
                    },
                },
                MuiDrawer: {
                    styleOverrides: {
                        paper: {
                            backgroundImage: "none",
                        },
                    },
                },
                MuiTableCell: {
                    styleOverrides: {
                        head: {
                            backgroundColor: alpha(tokenSet.palette.surfaceAlt, isDark ? 0.96 : 0.88),
                            borderBottom: `1px solid ${tokenSet.palette.dividerStrong}`,
                            fontWeight: 700,
                        },
                        body: {
                            borderBottom: `1px solid ${alpha(tokenSet.palette.divider, 0.9)}`,
                        },
                    },
                },
            },
            launchpadTokens: {
                focusRing: tokenSet.cssVariables["--lp-focus-ring"],
                radii: RADII,
                chart: tokenSet.chart,
            },
        }),
    );
}
