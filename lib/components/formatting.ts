type RuntimeFormattingDefaults = {
    locale: string;
    timeZone: string;
};

let runtimeFormattingDefaults: RuntimeFormattingDefaults = {
    locale: "en-US",
    timeZone: "America/New_York",
};

export function setRuntimeFormattingDefaults(nextDefaults: RuntimeFormattingDefaults) {
    runtimeFormattingDefaults = nextDefaults;
}

function getRuntimeFormattingDefaults() {
    return runtimeFormattingDefaults;
}

export function formatNumber(value: number, locale = getRuntimeFormattingDefaults().locale) {
    return new Intl.NumberFormat(locale).format(value);
}

export function formatDateTime(
    value: string | Date,
    locale = getRuntimeFormattingDefaults().locale,
    timeZone = getRuntimeFormattingDefaults().timeZone,
) {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeStyle: "short",
        timeZone,
    }).format(typeof value === "string" ? new Date(value) : value);
}

export function formatDate(
    value: string | Date,
    locale = getRuntimeFormattingDefaults().locale,
    timeZone = getRuntimeFormattingDefaults().timeZone,
) {
    return new Intl.DateTimeFormat(locale, {
        dateStyle: "medium",
        timeZone,
    }).format(typeof value === "string" ? new Date(value) : value);
}
