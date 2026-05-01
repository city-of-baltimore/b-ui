import { z } from "zod";

const errorEnvelopeSchema = z.object({
    error: z.object({
        code: z.string(),
        message: z.string(),
        request_id: z.string().nullable().optional(),
        details: z.unknown().optional(),
    }),
});

export class ApiError extends Error {
    status: number;
    requestId?: string | null;
    details?: unknown;
    publicMessage: string;

    constructor(message: string, status: number, requestId?: string | null, details?: unknown) {
        super(message);
        this.name = "ApiError";
        this.status = status;
        this.requestId = requestId;
        this.details = details;
        this.publicMessage = message;
    }
}

type ApiOptions<T> = {
    schema: z.ZodType<T>;
    surface?: string;
};

export async function apiFetch<T>(path: string, options: ApiOptions<T>): Promise<T> {
    const response = await fetch(path, {
        headers: {
            "X-Client-Surface": options.surface ?? "launchpad-web",
        },
    });

    const requestId = response.headers.get("X-Request-ID");
    const json = await readJsonSafely(response);

    if (!response.ok) {
        const parsedError = errorEnvelopeSchema.safeParse(json);
        if (parsedError.success) {
            throw new ApiError(
                parsedError.data.error.message,
                response.status,
                parsedError.data.error.request_id ?? requestId,
                parsedError.data.error.details,
            );
        }
        throw new ApiError("The request could not be completed.", response.status, requestId);
    }

    return options.schema.parse(json) as T;
}

export function getApiErrorContext(error: unknown) {
    if (error instanceof ApiError) {
        return {
            details: error.details,
            publicMessage: error.publicMessage,
            requestId: error.requestId ?? undefined,
            status: error.status,
        };
    }

    if (typeof error === "object" && error !== null) {
        const record = error as Record<string, unknown>;
        return {
            details: record.details,
            publicMessage: typeof record.message === "string" ? record.message : undefined,
            requestId: typeof record.requestId === "string" ? record.requestId : undefined,
            status: typeof record.status === "number" ? record.status : undefined,
        };
    }

    return {
        details: undefined,
        publicMessage: undefined,
        requestId: undefined,
        status: undefined,
    };
}

async function readJsonSafely(response: Response) {
    const text = await response.text();
    if (!text) {
        return null;
    }

    try {
        return JSON.parse(text) as unknown;
    } catch {
        return null;
    }
}
