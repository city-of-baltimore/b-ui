import { Theme } from '@mui/material/styles';
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
export declare function buildSectionSurfaceSx(theme: Theme, { padding, tone, }?: {
    padding?: SectionSurfacePadding;
    tone?: SectionSurfaceTone;
}): {
    borderRadius: string;
    border: string;
    background: string;
    boxShadow: string;
    position: string;
    overflow: string;
};
export declare function buildInsetPanelSx(theme: Theme): {
    borderRadius: string;
    border: string;
    background: string;
    boxShadow: string;
    p: {
        xs: number;
        sm: number;
    };
};
export declare function buildSummaryCardSx(theme: Theme, { interactive, tone, selected, }?: {
    interactive?: boolean;
    tone?: "default" | "accent";
    selected?: boolean;
}): {
    "&:hover"?: {
        borderColor: string;
        boxShadow: string;
        transform: string;
    } | undefined;
    "&:focus-visible"?: {
        outline: string;
        outlineOffset: string;
    } | undefined;
    minHeight: string;
    width: string;
    textAlign: string;
    background: string;
    borderColor: string;
    boxShadow: string;
    cursor: string;
    transition: string;
};
export declare function buildStatusBannerSx(theme: Theme, tone: "info" | "warning" | "error" | "success"): {
    borderRadius: string;
    border: string;
    backgroundColor: "var(--lp-status-info-bg)" | "var(--lp-status-success-bg)" | "var(--lp-status-warning-bg)" | "var(--lp-status-error-bg)";
    color: string;
    "& .MuiAlert-icon": {
        color: string;
    };
    "& .MuiAlertTitle-root": {
        color: string;
        fontFamily: import("csstype").Property.FontFamily | undefined;
        fontWeight: number;
        marginBottom: string;
    };
    "& .MuiAlert-message": {
        color: string;
    };
    "& .MuiButton-root": {
        alignSelf: string;
    };
};
export declare function buildFixedChromeSx(theme: Theme, options?: {
    footer?: boolean;
}): {
    backgroundColor: string;
    color: string;
    backdropFilter: string;
    WebkitBackdropFilter: string;
    borderBottom: string;
    borderTop: string;
    boxShadow: string;
};
export declare function buildChromeUtilityButtonSx(theme: Theme): {
    borderRadius: string;
    border: string;
    backgroundColor: string;
    color: string;
    minWidth: number;
    height: number;
    "&:hover": {
        backgroundColor: string;
        borderColor: string;
    };
    "&:focus-visible": {
        outline: string;
        outlineOffset: string;
    };
};
export declare function buildMapActionButtonSx(theme: Theme): {
    whiteSpace: string;
    borderRadius: string;
    borderColor: string;
    backgroundColor: string;
    color: string;
    boxShadow: string;
    "&:hover": {
        borderColor: string;
        backgroundColor: string;
        boxShadow: string;
    };
    "&:focus-visible": {
        outline: string;
        outlineOffset: string;
    };
};
export declare function buildBannerSupportTextSx(theme: Theme): {
    alignSelf: string;
    color: string;
    maxWidth: number;
};
export declare function buildStateSurfaceSx(theme: Theme, kind?: "default" | "error"): {
    borderRadius: string;
    border: string;
    background: string;
    p: {
        xs: number;
        sm: number;
    };
};
