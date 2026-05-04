import { ElementType } from 'react';
import { AppTableColumn, AppTablePaginationConfig } from '../table/types';
type AppTableProps<Row extends {
    id: string;
}> = {
    title: string;
    description?: string;
    columns: AppTableColumn<Row>[];
    rows: Row[];
    testId?: string;
    pagination?: AppTablePaginationConfig;
    selectedRowId?: string | null;
    onRowSelect: (row: Row) => void;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
    titleComponent?: ElementType;
};
export declare function AppTable<Row extends {
    id: string;
}>({ title, description, columns, rows, testId, pagination, selectedRowId, onRowSelect, onPageChange, onPageSizeChange, titleComponent, }: AppTableProps<Row>): import("react/jsx-runtime").JSX.Element;
export type { AppTableColumn } from '../table/types';
