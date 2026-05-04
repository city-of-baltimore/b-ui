type RuntimeFormattingDefaults = {
    locale: string;
    timeZone: string;
};
export declare function setRuntimeFormattingDefaults(nextDefaults: RuntimeFormattingDefaults): void;
export declare function formatNumber(value: number, locale?: string): string;
export declare function formatDateTime(value: string | Date, locale?: string, timeZone?: string): string;
export declare function formatDate(value: string | Date, locale?: string, timeZone?: string): string;
export {};
