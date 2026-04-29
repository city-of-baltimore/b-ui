export type AppTableColumn<Row extends { id: string }> = {
  id: keyof Row;
  label: string;
  render?: (row: Row) => string | number | null;
};

export type AppTablePaginationConfig = {
  page: number;
  pageSize: number;
  totalRows: number;
  totalPages: number;
  pageSizeOptions?: number[];
};
