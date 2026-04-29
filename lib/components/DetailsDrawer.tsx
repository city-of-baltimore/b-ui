import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, Drawer, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";


type DetailsDrawerProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: ReactNode;
};

export function DetailsDrawer({
  open,
  title,
  subtitle,
  onClose,
  children,
}: DetailsDrawerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      anchor={isMobile ? "bottom" : "right"}
      onClose={onClose}
      open={open}
      PaperProps={{
        className: "lp-details-paper",
        sx: {
          width: isMobile ? "100%" : "min(560px, calc(100vw - 40px))",
          maxHeight: isMobile ? "86vh" : "100vh",
          borderTopLeftRadius: `${theme.launchpadTokens.radii.overlay}px`,
          borderTopRightRadius: `${theme.launchpadTokens.radii.overlay}px`,
          borderBottomLeftRadius: isMobile ? 0 : `${theme.launchpadTokens.radii.overlay}px`,
          borderBottomRightRadius: isMobile ? 0 : `${theme.launchpadTokens.radii.overlay}px`,
          border: "1px solid var(--lp-detail-border)",
        },
      }}
    >
      <Stack sx={{ height: "100%" }}>
        {isMobile ? (
          <Box sx={{ display: "flex", justifyContent: "center", pt: 1.25 }}>
            <Box className="lp-details-handle" />
          </Box>
        ) : null}
        <Box
          sx={{
            alignItems: "start",
            borderBottom: `1px solid ${theme.palette.divider}`,
            display: "grid",
            gap: 1,
            gridTemplateColumns: "minmax(0, 1fr) auto",
            px: 3,
            py: 2.5,
            position: "sticky",
            top: 0,
            background: "var(--lp-detail-surface-bg)",
            zIndex: 1,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography data-testid="details-drawer-title" variant="h5">
              {title}
            </Typography>
            {subtitle ? (
              <Typography color="text.secondary" variant="body2">
                {subtitle}
              </Typography>
            ) : null}
          </Box>
          <IconButton
            aria-label="Close details"
            data-testid="details-drawer-close"
            onClick={onClose}
            sx={{ alignSelf: "start" }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
        <Box
          data-testid="details-drawer-content"
          sx={{ overflowY: "auto", px: 3, py: 3.25 }}
        >
          {children}
        </Box>
      </Stack>
    </Drawer>
  );
}
