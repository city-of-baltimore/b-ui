import { messages } from "./i18n/messages";

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

type ErrorLike = {
    data?: unknown;
    message: string;
    name: string;
    requestId?: string | null;
    stack?: string;
    status?: number;
    statusText?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null;
}

function toErrorLike(error: unknown): ErrorLike {
    if (error instanceof Error) {
        const record = error as Error & {
            data?: unknown;
            requestId?: string | null;
            status?: number;
            statusText?: string;
        };
        return {
            data: record.data,
            message: record.message,
            name: record.name,
            requestId: record.requestId,
            stack: record.stack,
            status: record.status,
            statusText: record.statusText,
        };
    }

    if (isRecord(error)) {
        const message =
            typeof error.message === "string"
                ? error.message
                : typeof error.statusText === "string"
                    ? error.statusText
                    : "Unknown frontend error";
        const name = typeof error.name === "string" ? error.name : "UnknownError";
        const status = typeof error.status === "number" ? error.status : undefined;
        const requestId =
            typeof error.requestId === "string"
                ? error.requestId
                : typeof error.request_id === "string"
                    ? error.request_id
                    : undefined;
        const statusText =
            typeof error.statusText === "string" ? error.statusText : undefined;

        return {
            data: error.data,
            message,
            name,
            requestId,
            stack: typeof error.stack === "string" ? error.stack : undefined,
            status,
            statusText,
        };
    }

    return {
        message: typeof error === "string" ? error : "Unknown frontend error",
        name: "UnknownError",
    };
}

function extractRequestId(
    routeData: unknown,
    explicitRequestId?: string | null,
): string | undefined {
    if (explicitRequestId) {
        return explicitRequestId;
    }

    if (!isRecord(routeData)) {
        return undefined;
    }

    const candidates = [routeData.requestId, routeData.request_id];
    for (const candidate of candidates) {
        if (typeof candidate === "string" && candidate.length > 0) {
            return candidate;
        }
    }

    return undefined;
}

function resolvePublicCopy(surface: FrontendErrorSurface, status?: number) {
    const copy = messages.errorRecovery.publicCopy;

    if (surface === "runtime-config") {
        return copy.runtimeConfig;
    }

    if (surface === "route") {
        if (status === 401 || status === 403) {
            return copy.routeAccess;
        }

        if (status === 404) {
            return copy.routeNotFound;
        }

        return copy.routeUnavailable;
    }

    return copy.application;
}

export function normalizeFrontendError(
    error: unknown,
    context: FrontendErrorContext,
): NormalizedFrontendError {
    const errorLike = toErrorLike(error);
    const requestId = extractRequestId(errorLike.data, context.requestId ?? errorLike.requestId);
    const publicCopy = resolvePublicCopy(context.surface, errorLike.status);

    return {
        description: publicCopy.description,
        report: {
            extra: context.extra,
            message: errorLike.message,
            name: errorLike.name,
            requestId,
            routePath: context.routePath,
            source: context.source,
            stack: errorLike.stack,
            status: errorLike.status,
            surface: context.surface,
        },
        requestId,
        title: publicCopy.title,
    };
}

export function reportFrontendError(report: FrontendErrorReport) {
    console.error("[launchpad-frontend-error]", report);
}
