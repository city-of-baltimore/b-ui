import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import {
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import type { AppTablePaginationConfig } from "../types";

export function AppTablePagination({
    pagination,
    onPageChange,
    onPageSizeChange,
}: {
    pagination: AppTablePaginationConfig;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (pageSize: number) => void;
}) {
    const theme = useTheme();
    const pageSizeOptions = pagination.pageSizeOptions ?? [10, 25, 50];

    return (
        <Stack
            data-testid="app-table-pagination"
            // alignItems={{ xs: "stretch", sm: "center" }}
            direction={{ xs: "column", sm: "row" }}
            // justifyContent="space-between"
            spacing={1.25}
            sx={{
                borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
                border: "1px solid var(--lp-border-soft)",
                background: "var(--lp-inset-gradient)",
                p: { xs: 1.5, sm: 1.75 },
            }}
        >
            <Stack
                // alignItems={{ xs: "stretch", sm: "center" }}
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
            >
                <Typography color="text.secondary" variant="body2">
                    Page {pagination.page} of {pagination.totalPages} · {pagination.totalRows.toLocaleString()} matching requests
                </Typography>
                <FormControl size="small" sx={{ minWidth: 128 }}>
                    <InputLabel id="app-table-page-size-label">Rows per page</InputLabel>
                    <Select
                        data-testid="app-table-page-size"
                        label="Rows per page"
                        labelId="app-table-page-size-label"
                        size="small"
                        value={pagination.pageSize ?? pageSizeOptions[0]}
                        sx={{
                            "& .MuiSelect-select": {
                                py: 0.8,
                            },
                        }}
                        onChange={(event) => onPageSizeChange?.(Number(event.target.value))}
                    >
                        {pageSizeOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option} per page
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Stack>
            <Stack direction="row" spacing={0.5}>
                <IconButton
                    aria-label="Previous page"
                    data-testid="app-table-page-previous"
                    disabled={pagination.page <= 1}
                    size="small"
                    onClick={() => onPageChange?.(pagination.page - 1)}
                >
                    <ChevronLeftRoundedIcon />
                </IconButton>
                <IconButton
                    aria-label="Next page"
                    data-testid="app-table-page-next"
                    disabled={pagination.page >= pagination.totalPages}
                    size="small"
                    onClick={() => onPageChange?.(pagination.page + 1)}
                >
                    <ChevronRightRoundedIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}
