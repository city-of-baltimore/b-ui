import { z } from 'zod';
export declare class ApiError extends Error {
    status: number;
    requestId?: string | null;
    details?: unknown;
    publicMessage: string;
    constructor(message: string, status: number, requestId?: string | null, details?: unknown);
}
type ApiOptions<T> = {
    schema: z.ZodType<T>;
    surface?: string;
};
export declare function apiFetch<T>(path: string, options: ApiOptions<T>): Promise<T>;
export declare function getApiErrorContext(error: unknown): {
    details: unknown;
    publicMessage: string | undefined;
    requestId: string | undefined;
    status: number | undefined;
};
export {};
