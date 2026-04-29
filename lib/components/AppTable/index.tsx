import {
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ElementType } from "react";

import { SectionSurface } from "./SectionSurface";
import { SurfaceHeader } from "./SurfaceHeader";
import { AppTableEmptyState } from "./table/AppTableEmptyState";
import { AppTableGrid } from "./table/AppTableGrid";
import { AppTableMobileList } from "./table/AppTableMobileList";
import { AppTablePagination } from "./table/AppTablePagination";
import type { AppTableColumn, AppTablePaginationConfig } from "./table/types";

type AppTableProps<Row extends { id: string }> = {
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

export function AppTable<Row extends { id: string }>({
  title,
  description,
  columns,
  rows,
  testId = "app-table",
  pagination,
  selectedRowId,
  onRowSelect,
  onPageChange,
  onPageSizeChange,
  titleComponent,
}: AppTableProps<Row>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const showPagination = Boolean(pagination);

  return (
    <SectionSurface data-testid={testId} padding="default" tone="soft">
      <Stack spacing={2}>
        <SurfaceHeader
          title={title}
          titleComponent={titleComponent}
          titleVariant="h5"
          description={description}
        />

        {!rows.length ? (
          <AppTableEmptyState />
        ) : isMobile ? (
          <Stack spacing={1.5}>
            <AppTableMobileList
              columns={columns}
              rows={rows}
              selectedRowId={selectedRowId}
              onRowSelect={onRowSelect}
            />
            {showPagination && pagination ? (
              <AppTablePagination
                pagination={pagination}
                onPageChange={onPageChange}
                onPageSizeChange={onPageSizeChange}
              />
            ) : null}
          </Stack>
        ) : (
          <Stack spacing={1.5}>
            <AppTableGrid
              columns={columns}
              rows={rows}
              selectedRowId={selectedRowId}
              onRowSelect={onRowSelect}
            />
            {showPagination && pagination ? (
              <AppTablePagination
                pagination={pagination}
                onPageChange={onPageChange}
                onPageSizeChange={onPageSizeChange}
              />
            ) : null}
          </Stack>
        )}
      </Stack>
    </SectionSurface>
  );
}

export type { AppTableColumn } from "./table/types";
