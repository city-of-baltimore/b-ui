import { Box, Container, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { buildFixedChromeSx } from "./surfaceStyles";


type AppFooterProps = {
  cityName: string;
  maxWidthPx: number;
  productTitle: string;
  supportEmail: string;
  supportLabel: string;
  supportPhone: string;
};

function buildPhoneHref(phoneNumber: string) {
  return `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;
}

export function AppFooter({
  cityName,
  maxWidthPx,
  productTitle,
  supportEmail,
  supportLabel,
  supportPhone,
}: AppFooterProps) {
  const theme = useTheme();

  return (
    <Box
      className="lp-app-footer"
      component="footer"
      data-testid="app-footer"
      sx={buildFixedChromeSx(theme, { footer: true })}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidthPx,
          px: { xs: 2, sm: 3 },
        }}
      >
        <Stack
          alignItems={{ xs: "flex-start", md: "center" }}
          className="lp-app-footer__inner"
          direction={{ xs: "column", md: "row" }}
          gap={1}
          justifyContent="space-between"
        >
          <Stack
            alignItems={{ xs: "flex-start", sm: "center" }}
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 0.25, sm: 1.5 }}
          >
            <Typography component="strong" sx={{ fontWeight: 800 }} variant="body2">
              {cityName}
            </Typography>
            <Typography
              sx={{ color: alpha(theme.palette.common.white, 0.78) }}
              variant="body2"
            >
              {productTitle}
            </Typography>
          </Stack>

          <Stack
            alignItems={{ xs: "flex-start", sm: "center" }}
            direction={{ xs: "column", sm: "row" }}
            gap={{ xs: 0.35, sm: 1 }}
          >
            <Typography
              component="p"
              data-testid="app-footer-support-label"
              sx={{ color: "var(--lp-brand-accent)" }}
              variant="subtitle2"
            >
              {supportLabel}
            </Typography>
            <Typography
              component="a"
              data-testid="app-footer-support-email"
              href={`mailto:${supportEmail}`}
              sx={{
                color: alpha(theme.palette.common.white, 0.84),
                display: { xs: "none", sm: "inline" },
                textDecoration: "none",
              }}
              variant="body2"
            >
              {supportEmail}
            </Typography>
            <Typography
              aria-hidden="true"
              sx={{ color: alpha(theme.palette.common.white, 0.46), display: { xs: "none", sm: "inline" } }}
              variant="body2"
            >
              ·
            </Typography>
            <Typography
              component="a"
              data-testid="app-footer-support-phone"
              href={buildPhoneHref(supportPhone)}
              sx={{
                color: alpha(theme.palette.common.white, 0.84),
                textDecoration: "none",
              }}
              variant="body2"
            >
              {supportPhone}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
