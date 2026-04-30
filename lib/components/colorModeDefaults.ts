type ColorModePreference = "light" | "dark" | "system";

let runtimeDefaultPreference: ColorModePreference = "system";
const runtimeDefaultSubscribers = new Set<(preference: ColorModePreference) => void>();


export function readStoredColorModePreference(): ColorModePreference | null {
    if (typeof window === "undefined") {
        return null;
    }
    const stored = window.localStorage.getItem("launchpad-color-mode");
    return stored === "light" || stored === "dark" || stored === "system" ? stored : null;
}


export function getInitialColorModePreference(): ColorModePreference {
    return readStoredColorModePreference() ?? runtimeDefaultPreference;
}


export function setRuntimeDefaultColorMode(preference: ColorModePreference) {
    runtimeDefaultPreference = preference;
    for (const subscriber of runtimeDefaultSubscribers) {
        subscriber(preference);
    }
}


export function subscribeToRuntimeDefaultColorMode(
    subscriber: (preference: ColorModePreference) => void,
) {
    runtimeDefaultSubscribers.add(subscriber);
    return () => {
        runtimeDefaultSubscribers.delete(subscriber);
    };
}
