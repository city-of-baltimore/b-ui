import { AppTableColumn } from '../types';
export declare function AppTableMobileList<Row extends {
    id: string;
}>({ columns, onRowSelect, rows, selectedRowId, }: {
    columns: AppTableColumn<Row>[];
    onRowSelect: (row: Row) => void;
    rows: Row[];
    selectedRowId?: string | null;
}): import("react/jsx-runtime").JSX.Element;
