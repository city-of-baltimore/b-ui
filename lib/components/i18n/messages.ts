export const messages = {
    app: {
        skipToMainContent: "Skip to main content",
        themeToggle: "Toggle color mode",
        openApplicationMenu: "Open application menu",
        systemAppearance: "System appearance",
    },
    common: {
        close: "Close",
        clearFilters: "Clear filters",
        resetToCity: "Reset to citywide view",
    },
    errorRecovery: {
        actionLabel: "Return home",
        nextStepsTitle: "What you can do next",
        requestIdSupportNote:
            "If this keeps happening, share the request ID with support so the team can trace the issue quickly.",
        notFound: {
            eyebrow: "Application recovery",
            title: "Page not found",
            subtitle: "This address does not match a configured public route.",
            supportingText:
                "Use the recovery actions below to return to the active briefing without losing product context.",
            stateEyebrow: "Page unavailable",
            stateTitle: "We could not find that page",
            stateDescription:
                "The page may have moved, or the link may have been copied from a workspace that is no longer available.",
            nextSteps: [
                "Return home to the active public briefing.",
                "Check the address for missing or extra characters.",
                "Contact support if you expected this route to exist.",
            ],
        },
        publicCopy: {
            application: {
                description: "Something went wrong while rendering this page.",
                title: "Application error",
            },
            routeAccess: {
                description:
                    "This route is not currently available with the current session or permissions.",
                title: "Access unavailable",
            },
            routeNotFound: {
                description: "The requested route could not be found.",
                title: "Page unavailable",
            },
            routeUnavailable: {
                description: "The requested route could not be rendered.",
                title: "Route unavailable",
            },
            runtimeConfig: {
                description:
                    "Launchpad could not load the runtime contract needed to render this experience.",
                title: "Runtime configuration unavailable",
            },
        },
        routeError: {
            eyebrow: "Application recovery",
            supportingText:
                "The shell stayed available so you can recover without seeing raw framework errors.",
            stateEyebrow: "Route recovery",
            nextSteps: [
                "Return home and try the workflow again.",
                "Refresh the page if the route was loading during a deploy.",
                "Share the request ID with support if the problem repeats.",
            ],
        },
    },
};
