import { Box, Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import type { AppTableColumn } from "../types";
export function AppTableMobileList<Row extends { id: string }>({
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
        <Stack data-testid="app-table-mobile-list" spacing={1.5}>
            {rows.map((row) => (
                <Card
                    key={row.id}
                    sx={{
                        background:
                            row.id === selectedRowId
                                ? "var(--lp-table-card-bg-active)"
                                : "var(--lp-table-card-bg)",
                        border:
                            row.id === selectedRowId
                                ? `1px solid ${alpha(theme.palette.primary.main, 0.34)}`
                                : "1px solid var(--lp-border-soft)",
                        boxShadow:
                            row.id === selectedRowId
                                ? `0 18px 36px ${alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.18 : 0.12)}`
                                : "var(--lp-shadow-surface)",
                    }}
                >
                    <CardActionArea onClick={() => onRowSelect(row)}>
                        <CardContent>
                            <Stack spacing={1.5}>
                                {columns.slice(0, 4).map((column) => (
                                    <Box key={String(column.id)}>
                                        <Typography color="text.secondary" variant="caption">
                                            {column.label}
                                        </Typography>
                                        <Typography variant="body2">
                                            {String(column.render ? column.render(row) : row[column.id] ?? "")}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Stack>
    );
}
