import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, type ElementType, type ReactNode } from "react";

import { SectionSurface } from "./SectionSurface";
import { SurfaceHeader } from "./SurfaceHeader";
import { buildInsetPanelSx } from "./surfaceStyles";


type FilterPanelProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  titleComponent?: ElementType;
};

export function FilterPanel({
  title,
  description,
  actions,
  children,
  titleComponent,
}: FilterPanelProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [sheetOpen, setSheetOpen] = useState(false);

  if (isMobile) {
    return (
      <>
        <SectionSurface data-testid="filter-panel" padding="default" tone="soft">
          <Stack spacing={2}>
            <SurfaceHeader
              eyebrow="Explore the current story slice"
              title={title}
              titleComponent={titleComponent}
              titleVariant="h5"
              description={description}
            />
            <Stack
              alignItems={{ xs: "stretch", sm: "center" }}
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              spacing={1.5}
            >
              <Typography color="text.secondary" variant="body2">
                Open the mobile filter sheet to refine the current slice without
                crowding the main story surfaces.
              </Typography>
              <Button
                onClick={() => setSheetOpen(true)}
                startIcon={<TuneRoundedIcon />}
                variant="contained"
              >
                Open filters
              </Button>
            </Stack>
          </Stack>
        </SectionSurface>
        <Drawer
          anchor="bottom"
          open={sheetOpen}
          onClose={() => setSheetOpen(false)}
          PaperProps={{
            sx: {
              borderTopLeftRadius: `${theme.launchpadTokens.radii.overlay}px`,
              borderTopRightRadius: `${theme.launchpadTokens.radii.overlay}px`,
              maxHeight: "84vh",
            },
          }}
        >
          <Stack sx={{ height: "100%" }}>
            <Box
              sx={{
                background: "var(--lp-detail-surface-bg)",
                borderBottom: "1px solid var(--lp-border-default)",
                px: 3,
                py: 2.25,
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              <Stack direction="row" justifyContent="space-between" spacing={2}>
                <Box sx={{ minWidth: 0 }}>
                  <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
                    Explore the current story slice
                  </Typography>
                  <Typography component={titleComponent ?? "h5"} variant="h5">
                    {title}
                  </Typography>
                </Box>
                <IconButton aria-label="Close filters" onClick={() => setSheetOpen(false)}>
                  <CloseRoundedIcon />
                </IconButton>
              </Stack>
            </Box>
            <Stack spacing={2.5} sx={{ overflowY: "auto", p: 3 }}>
              <Box sx={buildInsetPanelSx(theme)}>{children}</Box>
              {actions ? (
                <Stack direction="column" spacing={1.25}>
                  {actions}
                </Stack>
              ) : null}
            </Stack>
          </Stack>
        </Drawer>
      </>
    );
  }

  return (
    <SectionSurface data-testid="filter-panel" padding="default" tone="soft">
      <Stack spacing={3}>
        <SurfaceHeader
          actions={actions}
          eyebrow="Explore the current story slice"
          title={title}
          titleComponent={titleComponent}
          titleVariant="h5"
          description={description}
        />
        <Box sx={buildInsetPanelSx(theme)}>{children}</Box>
      </Stack>
    </SectionSurface>
  );
}
