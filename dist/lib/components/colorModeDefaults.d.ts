type ColorModePreference = "light" | "dark" | "system";
export declare function readStoredColorModePreference(): ColorModePreference | null;
export declare function getInitialColorModePreference(): ColorModePreference;
export declare function setRuntimeDefaultColorMode(preference: ColorModePreference): void;
export declare function subscribeToRuntimeDefaultColorMode(subscriber: (preference: ColorModePreference) => void): () => void;
export {};
