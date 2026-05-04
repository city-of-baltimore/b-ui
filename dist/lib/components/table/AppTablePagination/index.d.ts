import { AppTablePaginationConfig } from '../types';
export declare function AppTablePagination({ pagination, onPageChange, onPageSizeChange, }: {
    pagination: AppTablePaginationConfig;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
}): import("react/jsx-runtime").JSX.Element;
