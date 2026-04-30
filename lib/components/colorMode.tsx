import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { GlobalStyles } from "@mui/material";
import type { PaletteMode } from "@mui/material";

import { buildTheme } from "./theme";
import { applyLaunchpadColorModeToDocument } from "./themeTokens";
import {
    getInitialColorModePreference,
    readStoredColorModePreference,
    subscribeToRuntimeDefaultColorMode,
} from "./colorModeDefaults";


type ColorModePreference = "light" | "dark" | "system";

type ColorModeContextValue = {
    preference: ColorModePreference;
    resolvedMode: PaletteMode;
    setPreference: (nextPreference: ColorModePreference) => void;
};

const STORAGE_KEY = "launchpad-color-mode";
const ColorModeContext = createContext<ColorModeContextValue | null>(null);


function resolveMode(preference: ColorModePreference): PaletteMode {
    if (preference !== "system") {
        return preference;
    }

    if (typeof window === "undefined") {
        return "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ColorModeProvider({ children }: { children: ReactNode }) {
    const [preference, setPreference] = useState<ColorModePreference>(() => getInitialColorModePreference());
    const [hasUserPreference, setHasUserPreference] = useState<boolean>(() => readStoredColorModePreference() !== null);

    const resolvedMode = resolveMode(preference);
    const theme = useMemo(() => buildTheme(resolvedMode), [resolvedMode]);

    const handleSetPreference = (nextPreference: ColorModePreference) => {
        setHasUserPreference(true);
        setPreference(nextPreference);
    };

    useEffect(() => {
        const handleRuntimeDefaultChange = (nextPreference: ColorModePreference) => {
            if (hasUserPreference) {
                return;
            }
            setPreference(nextPreference);
        };

        return subscribeToRuntimeDefaultColorMode(handleRuntimeDefaultChange);
    }, [hasUserPreference]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        if (hasUserPreference) {
            window.localStorage.setItem(STORAGE_KEY, preference);
        } else {
            window.localStorage.removeItem(STORAGE_KEY);
        }
        applyLaunchpadColorModeToDocument(resolvedMode);
    }, [hasUserPreference, preference, resolvedMode]);

    return (
        <ColorModeContext.Provider
            value={{ preference, resolvedMode, setPreference: handleSetPreference }
            }>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                < GlobalStyles
                    styles={{
                        "html, body, #root": {
                            minHeight: "100%",
                            color: "black",
                        },
                        "*": {
                            boxSizing: "border-box",
                        },
                        "[data-color-scheme='dark']": {
                            colorScheme: "dark",
                        },
                        "[data-color-scheme='light']": {
                            colorScheme: "light",
                        },
                        "a:focus-visible, button:focus-visible, [role='button']:focus-visible": {
                            outline: "3px solid var(--lp-focus-ring)",
                            outlineOffset: "3px",
                        },
                    }}
                />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}


export function useColorMode() {
    const context = useContext(ColorModeContext);
    if (!context) {
        throw new Error("useColorMode must be used inside ColorModeProvider.");
    }
    return context;
}
