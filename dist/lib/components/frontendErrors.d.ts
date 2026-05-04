type FrontendErrorSurface = "route" | "runtime-config" | "component" | "unknown";
type FrontendErrorContext = {
    source: string;
    surface: FrontendErrorSurface;
    routePath?: string;
    requestId?: string | null;
    extra?: Record<string, unknown>;
};
type FrontendErrorReport = {
    extra?: Record<string, unknown>;
    message: string;
    name: string;
    requestId?: string;
    routePath?: string;
    source: string;
    stack?: string;
    status?: number;
    surface: FrontendErrorSurface;
};
export type NormalizedFrontendError = {
    description: string;
    report: FrontendErrorReport;
    requestId?: string;
    title: string;
};
export declare function normalizeFrontendError(error: unknown, context: FrontendErrorContext): NormalizedFrontendError;
export declare function reportFrontendError(report: FrontendErrorReport): void;
export {};
