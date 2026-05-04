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
export declare const THEME_MODE_DEFINITIONS: Record<LaunchpadResolvedColorMode, ThemeModeDefinition>;
export declare function getThemeModeDefinition(mode: LaunchpadResolvedColorMode): ThemeModeDefinition;
export declare function applyLaunchpadColorModeToDocument(mode: LaunchpadResolvedColorMode): void;
export {};
