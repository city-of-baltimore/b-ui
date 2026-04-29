import {
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import type { AppTableColumn } from "./types";

export function AppTableGrid<Row extends { id: string }>({
  columns,
  onRowSelect,
  rows,
  selectedRowId,
}: {
  columns: AppTableColumn<Row>[];
  onRowSelect: (row: Row) => void;
  rows: Row[];
  selectedRowId?: string | null;
}) {
  const theme = useTheme();

  return (
    <Stack spacing={1.5}>
      <TableContainer
        sx={{
          border: "1px solid var(--lp-border-soft)",
          borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
          overflow: "hidden",
        }}
      >
        <Table aria-label="Starter results table" data-testid="app-table-grid">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={String(column.id)}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                data-testid="app-table-row"
                hover
                key={row.id}
                onClick={() => onRowSelect(row)}
                selected={row.id === selectedRowId}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "var(--lp-table-row-hover)",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "var(--lp-table-row-active)",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "var(--lp-table-row-active)",
                  },
                }}
              >
                {columns.map((column) => (
                  <TableCell key={String(column.id)}>
                    {String(column.render ? column.render(row) : row[column.id] ?? "")}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
