import { ReactNode } from 'react';
import { PaletteMode } from '@mui/material';
type ColorModePreference = "light" | "dark" | "system";
type ColorModeContextValue = {
    preference: ColorModePreference;
    resolvedMode: PaletteMode;
    setPreference: (nextPreference: ColorModePreference) => void;
};
export declare function ColorModeProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useColorMode(): ColorModeContextValue;
export {};
