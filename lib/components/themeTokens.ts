//TODO @xanderjakeq: can this be a json file
export type LaunchpadResolvedColorMode = "light" | "dark";
type ThemeCssVariables = Record<`--lp-${string}`, string>;

type ThemePaletteTokens = {
    backgroundDefault: string;
    backgroundPaper: string;
    surfaceMuted: string;
    surfaceAlt: string;
    surfaceElevated: string;
    divider: string;
    dividerStrong: string;
    primary: string;
    primaryDark: string;
    secondary: string;
    accent: string;
    accentSoft: string;
    textPrimary: string;
    textSecondary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
};

type ThemeModeDefinition = {
    palette: ThemePaletteTokens;
    chart: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    cssVariables: ThemeCssVariables;
};

const SHARED_CSS_VARIABLES = {
    "--lp-header-foreground": "#ffffff",
    "--lp-radius-pill": "999px",
    "--lp-radius-control": "14px",
    "--lp-radius-surface": "18px",
    "--lp-radius-overlay": "20px",
    "--lp-focus-width": "3px",
    "--lp-focus-offset": "3px",
    "--lp-layout-header-height": "84px",
    "--lp-layout-footer-height": "76px",
    "--lp-layout-banner-gap": "24px",
} as const satisfies ThemeCssVariables;

export const THEME_MODE_DEFINITIONS: Record<LaunchpadResolvedColorMode, ThemeModeDefinition> = {
    light: {
        palette: {
            backgroundDefault: "#f7fbfc",
            backgroundPaper: "#ffffff",
            surfaceMuted: "#f3eef9",
            surfaceAlt: "#eef6f8",
            surfaceElevated: "#fcfdff",
            divider: "#d8e2e8",
            dividerStrong: "#c4d1d9",
            primary: "#2f1c3d",
            primaryDark: "#190e21",
            secondary: "#88c7d5",
            accent: "#fabe21",
            accentSoft: "#fff4cc",
            textPrimary: "#161616",
            textSecondary: "#526270",
            info: "#2d6d8a",
            success: "#2f7d61",
            warning: "#e1a517",
            error: "#b64454",
        },
        chart: {
            primary: "#5f4d86",
            secondary: "#c89218",
            tertiary: "#6faebd",
        },
        cssVariables: {
            ...SHARED_CSS_VARIABLES,
            "--lp-bg": "#f7fbfc",
            "--lp-bg-gradient":
                "radial-gradient(circle at top left, rgba(243, 238, 249, 0.94) 0%, rgba(247, 251, 252, 0.98) 40%, rgba(247, 251, 252, 1) 100%)",
            "--lp-surface-default": "#ffffff",
            "--lp-surface-subtle": "#f3eef9",
            "--lp-surface-alt": "#eef6f8",
            "--lp-surface-elevated": "#fcfdff",
            "--lp-surface-gradient-soft":
                "linear-gradient(180deg, rgba(243, 238, 249, 0.88) 0%, rgba(255, 255, 255, 0.98) 100%)",
            "--lp-surface-gradient-hero":
                "linear-gradient(180deg, rgba(243, 238, 249, 0.94) 0%, rgba(255, 255, 255, 1) 100%)",
            "--lp-summary-soft-gradient":
                "linear-gradient(180deg, rgba(239, 246, 248, 0.9) 0%, rgba(255, 255, 255, 1) 100%)",
            "--lp-summary-accent-gradient":
                "linear-gradient(180deg, rgba(250, 190, 33, 0.16) 0%, rgba(243, 238, 249, 0.94) 100%)",
            "--lp-inset-gradient":
                "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(250, 248, 253, 1) 100%)",
            "--lp-header-gradient":
                "linear-gradient(180deg, rgba(47, 28, 61, 1) 0%, rgba(25, 14, 33, 0.98) 100%)",
            "--lp-glass-surface": "rgba(255, 255, 255, 0.78)",
            "--lp-brand-primary": "#2f1c3d",
            "--lp-brand-primary-dark": "#190e21",
            "--lp-brand-accent": "#fabe21",
            "--lp-brand-supporting": "#88c7d5",
            "--lp-text-primary": "#161616",
            "--lp-text-secondary": "#526270",
            "--lp-text-inverse": "#ffffff",
            "--lp-eyebrow-text": "#2f1c3d",
            "--lp-border-default": "#d8e2e8",
            "--lp-border-strong": "#c4d1d9",
            "--lp-border-soft": "rgba(95, 77, 134, 0.14)",
            "--lp-shadow-surface": "0 12px 30px rgba(25, 14, 33, 0.08)",
            "--lp-shadow-header": "0 8px 30px rgba(25, 14, 33, 0.18)",
            "--lp-shadow-footer": "0 -18px 38px rgba(18, 14, 28, 0.18)",
            "--lp-shadow-overlay": "0 26px 68px rgba(25, 14, 33, 0.16)",
            "--lp-banner-divider": "rgba(255, 255, 255, 0.18)",
            "--lp-focus-ring": "#fabe21",
            "--lp-empty-state-bg": "#eef6f8",
            "--lp-status-info-bg": "rgba(136, 199, 213, 0.16)",
            "--lp-status-info-border": "rgba(45, 109, 138, 0.28)",
            "--lp-status-success-bg": "rgba(47, 125, 97, 0.12)",
            "--lp-status-success-border": "rgba(47, 125, 97, 0.24)",
            "--lp-status-warning-bg": "rgba(250, 190, 33, 0.16)",
            "--lp-status-warning-border": "rgba(201, 146, 24, 0.28)",
            "--lp-status-error-bg": "rgba(182, 68, 84, 0.12)",
            "--lp-status-error-border": "rgba(182, 68, 84, 0.24)",
            "--lp-map-frame-gradient":
                "linear-gradient(180deg, rgba(247, 244, 237, 1) 0%, rgba(239, 231, 247, 1) 100%)",
            "--lp-map-overlay-bg": "rgba(255, 255, 255, 0.92)",
            "--lp-map-overlay-border": "rgba(95, 77, 134, 0.16)",
            "--lp-map-legend-bg": "rgba(255, 255, 255, 0.94)",
            "--lp-map-legend-text": "#190e21",
            "--lp-map-legend-shadow": "0 18px 42px rgba(18, 14, 28, 0.12)",
            "--lp-map-control-bg": "rgba(255, 255, 255, 0.94)",
            "--lp-map-control-bg-hover": "rgba(243, 238, 249, 0.96)",
            "--lp-map-control-border": "rgba(95, 77, 134, 0.18)",
            "--lp-map-control-icon": "#2f1c3d",
            "--lp-map-choropleth-1": "#d8dde3",
            "--lp-map-choropleth-2": "#d5cfe5",
            "--lp-map-choropleth-3": "#bdafd8",
            "--lp-map-choropleth-4": "#9a84c3",
            "--lp-map-choropleth-5": "#674493",
            "--lp-map-choropleth-no-data": "#d9e0e4",
            "--lp-map-choropleth-outline": "#5f4d86",
            "--lp-map-selected-outline": "#fabe21",
            "--lp-map-canvas-fallback": "#d9dce1",
            "--lp-detail-surface-bg":
                "linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 1) 100%)",
            "--lp-detail-border": "rgba(95, 77, 134, 0.18)",
            "--lp-detail-shadow":
                "0 26px 68px rgba(25, 14, 33, 0.16), 0 12px 28px rgba(25, 14, 33, 0.08)",
            "--lp-detail-handle-bg": "rgba(95, 77, 134, 0.22)",
            "--lp-detail-accent-gradient":
                "linear-gradient(90deg, rgba(250, 190, 33, 0.92) 0%, rgba(160, 142, 199, 0.78) 100%)",
            "--lp-chart-track": "#eceaf3",
            "--lp-chart-fill-primary": "linear-gradient(90deg, #a08ec7 0%, #5f4d86 100%)",
            "--lp-chart-fill-secondary": "linear-gradient(90deg, #f3cd5e 0%, #c89218 100%)",
            "--lp-chart-fill-tertiary": "linear-gradient(90deg, #88c7d5 0%, #4f91a1 100%)",
            "--lp-progress-track": "#e6ebef",
            "--lp-progress-fill-primary": "linear-gradient(90deg, #d4c6ef 0%, #755f9f 100%)",
            "--lp-progress-fill-accent": "linear-gradient(90deg, #f6d472 0%, #e7a621 100%)",
            "--lp-progress-fill-supporting": "linear-gradient(90deg, #9bd2dd 0%, #4f91a1 100%)",
            "--lp-table-row-hover": "#f7f5fb",
            "--lp-table-row-active": "#f1ecfa",
            "--lp-table-card-bg":
                "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(251, 248, 255, 1) 100%)",
            "--lp-table-card-bg-active":
                "linear-gradient(180deg, rgba(250, 245, 255, 1) 0%, rgba(244, 236, 255, 1) 100%)",
        },
    },
    dark: {
        palette: {
            backgroundDefault: "#0e1320",
            backgroundPaper: "#171d2a",
            surfaceMuted: "#1d2434",
            surfaceAlt: "#20293b",
            surfaceElevated: "#1c2332",
            divider: "#2e384d",
            dividerStrong: "#4a5771",
            primary: "#d6c4ff",
            primaryDark: "#140d1b",
            secondary: "#6faebd",
            accent: "#f4c54b",
            accentSoft: "#3d3010",
            textPrimary: "#f4f7fb",
            textSecondary: "#b5c0d1",
            info: "#7fc3d2",
            success: "#6fb68e",
            warning: "#f4c54b",
            error: "#ff9faf",
        },
        chart: {
            primary: "#b8a4e6",
            secondary: "#f4cf73",
            tertiary: "#8dc8d3",
        },
        cssVariables: {
            ...SHARED_CSS_VARIABLES,
            "--lp-bg": "#0e1320",
            "--lp-bg-gradient":
                "radial-gradient(circle at top left, rgba(38, 23, 58, 0.55) 0%, rgba(14, 19, 32, 0.98) 36%, rgba(14, 19, 32, 1) 100%)",
            "--lp-surface-default": "#171d2a",
            "--lp-surface-subtle": "#1d2434",
            "--lp-surface-alt": "#20293b",
            "--lp-surface-elevated": "#1c2332",
            "--lp-surface-gradient-soft":
                "linear-gradient(180deg, rgba(29, 36, 52, 0.98) 0%, rgba(23, 29, 42, 1) 100%)",
            "--lp-surface-gradient-hero":
                "linear-gradient(180deg, rgba(29, 36, 52, 1) 0%, rgba(18, 24, 36, 0.98) 100%)",
            "--lp-summary-soft-gradient":
                "linear-gradient(180deg, rgba(29, 36, 52, 1) 0%, rgba(23, 29, 42, 1) 100%)",
            "--lp-summary-accent-gradient":
                "linear-gradient(180deg, rgba(244, 197, 75, 0.18) 0%, rgba(34, 27, 51, 1) 100%)",
            "--lp-inset-gradient":
                "linear-gradient(180deg, rgba(29, 36, 52, 1) 0%, rgba(23, 29, 42, 1) 100%)",
            "--lp-header-gradient":
                "linear-gradient(180deg, rgba(38, 23, 58, 1) 0%, rgba(15, 18, 32, 1) 100%)",
            "--lp-glass-surface": "rgba(20, 27, 43, 0.9)",
            "--lp-brand-primary": "#d6c4ff",
            "--lp-brand-primary-dark": "#140d1b",
            "--lp-brand-accent": "#f4c54b",
            "--lp-brand-supporting": "#6faebd",
            "--lp-text-primary": "#f4f7fb",
            "--lp-text-secondary": "#b5c0d1",
            "--lp-text-inverse": "#f4f7fb",
            "--lp-eyebrow-text": "#d7c7ff",
            "--lp-border-default": "#2e384d",
            "--lp-border-strong": "#4a5771",
            "--lp-border-soft": "rgba(152, 129, 208, 0.2)",
            "--lp-shadow-surface": "0 18px 40px rgba(4, 8, 18, 0.38)",
            "--lp-shadow-header": "0 12px 34px rgba(1, 4, 9, 0.45)",
            "--lp-shadow-footer": "0 -20px 42px rgba(1, 4, 9, 0.42)",
            "--lp-shadow-overlay": "0 28px 72px rgba(4, 8, 18, 0.4)",
            "--lp-banner-divider": "rgba(244, 197, 75, 0.24)",
            "--lp-focus-ring": "#f4c54b",
            "--lp-empty-state-bg": "rgba(32, 41, 59, 0.85)",
            "--lp-status-info-bg": "rgba(111, 174, 189, 0.16)",
            "--lp-status-info-border": "rgba(111, 174, 189, 0.28)",
            "--lp-status-success-bg": "rgba(111, 182, 142, 0.16)",
            "--lp-status-success-border": "rgba(111, 182, 142, 0.28)",
            "--lp-status-warning-bg": "rgba(244, 197, 75, 0.16)",
            "--lp-status-warning-border": "rgba(244, 197, 75, 0.3)",
            "--lp-status-error-bg": "rgba(255, 159, 175, 0.12)",
            "--lp-status-error-border": "rgba(255, 159, 175, 0.28)",
            "--lp-map-frame-gradient":
                "linear-gradient(180deg, rgba(17, 24, 39, 1) 0%, rgba(23, 32, 51, 1) 100%)",
            "--lp-map-overlay-bg": "rgba(23, 29, 42, 0.88)",
            "--lp-map-overlay-border": "rgba(152, 129, 208, 0.28)",
            "--lp-map-legend-bg": "rgba(23, 29, 42, 0.92)",
            "--lp-map-legend-text": "#f4f7fb",
            "--lp-map-legend-shadow": "0 12px 26px rgba(4, 8, 18, 0.34)",
            "--lp-map-control-bg": "rgba(23, 29, 42, 0.94)",
            "--lp-map-control-bg-hover": "rgba(37, 46, 66, 0.98)",
            "--lp-map-control-border": "rgba(152, 129, 208, 0.32)",
            "--lp-map-control-icon": "#f4f7fb",
            "--lp-map-choropleth-1": "#1b2435",
            "--lp-map-choropleth-2": "#4c4272",
            "--lp-map-choropleth-3": "#6a5a9a",
            "--lp-map-choropleth-4": "#8d77c6",
            "--lp-map-choropleth-5": "#b196f2",
            "--lp-map-choropleth-no-data": "#2b3447",
            "--lp-map-choropleth-outline": "#dbcfff",
            "--lp-map-selected-outline": "#f4c54b",
            "--lp-map-canvas-fallback": "#1d2434",
            "--lp-detail-surface-bg":
                "linear-gradient(180deg, rgba(23, 29, 42, 0.98) 0%, rgba(20, 26, 38, 1) 100%)",
            "--lp-detail-border": "rgba(152, 129, 208, 0.28)",
            "--lp-detail-shadow":
                "0 28px 72px rgba(4, 8, 18, 0.4), 0 14px 32px rgba(4, 8, 18, 0.22)",
            "--lp-detail-handle-bg": "rgba(152, 129, 208, 0.34)",
            "--lp-detail-accent-gradient":
                "linear-gradient(90deg, rgba(244, 197, 75, 0.94) 0%, rgba(183, 156, 232, 0.82) 100%)",
            "--lp-chart-track": "#273043",
            "--lp-chart-fill-primary": "linear-gradient(90deg, #b8a4e6 0%, #7f68b3 100%)",
            "--lp-chart-fill-secondary": "linear-gradient(90deg, #f4cf73 0%, #da9a26 100%)",
            "--lp-chart-fill-tertiary": "linear-gradient(90deg, #8dc8d3 0%, #4d8d9c 100%)",
            "--lp-progress-track": "#2a3448",
            "--lp-progress-fill-primary": "linear-gradient(90deg, #c8b7eb 0%, #876dbd 100%)",
            "--lp-progress-fill-accent": "linear-gradient(90deg, #f4cf73 0%, #da9a26 100%)",
            "--lp-progress-fill-supporting": "linear-gradient(90deg, #8dc8d3 0%, #4d8d9c 100%)",
            "--lp-table-row-hover": "#20283a",
            "--lp-table-row-active": "#2a3450",
            "--lp-table-card-bg":
                "linear-gradient(180deg, rgba(29, 36, 52, 1) 0%, rgba(23, 29, 42, 1) 100%)",
            "--lp-table-card-bg-active":
                "linear-gradient(180deg, rgba(42, 52, 80, 1) 0%, rgba(31, 38, 58, 1) 100%)",
        },
    },
};

export function getThemeModeDefinition(mode: LaunchpadResolvedColorMode): ThemeModeDefinition {
    return THEME_MODE_DEFINITIONS[mode];
}

export function applyLaunchpadColorModeToDocument(mode: LaunchpadResolvedColorMode) {
    if (typeof document === "undefined") {
        return;
    }

    const root = document.documentElement;
    const definition = getThemeModeDefinition(mode);
    root.dataset.colorScheme = mode;
    root.style.colorScheme = mode;
    for (const [variable, value] of Object.entries(definition.cssVariables)) {
        root.style.setProperty(variable, value);
    }
}
