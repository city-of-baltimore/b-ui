import { Box, Container, Stack, Typography, type TypographyProps } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useId, type ElementType, type ReactNode } from "react";

import cityOfBaltimoreLogo from "../assets/branding/city-of-baltimore-logo.png";
import { buildBannerSupportTextSx } from "./surfaceStyles";


type PageBannerProps = {
  actions?: ReactNode;
  eyebrow: string;
  maxWidthPx: number;
  subtitle: string;
  supportingText?: string;
  title: string;
  titleComponent?: ElementType;
  titleVariant?: TypographyProps["variant"];
};

export function PageBanner({
  actions,
  eyebrow,
  maxWidthPx,
  subtitle,
  supportingText,
  title,
  titleComponent = "h1",
  titleVariant = "h1",
}: PageBannerProps) {
  const theme = useTheme();
  const titleId = useId();

  return (
    <Box
      aria-labelledby={titleId}
      className="lp-page-banner"
      component="section"
      data-testid="page-banner"
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: maxWidthPx,
          px: { xs: 2.5, sm: 3 },
          pb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Stack spacing={{ xs: 2.5, sm: 3, md: 4 }}>
          <Stack
            alignItems="flex-start"
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, sm: 2.5, md: 3 }}
          >
            <Box
              alt=""
              aria-hidden="true"
              component="img"
              src={cityOfBaltimoreLogo}
              sx={{
                flexShrink: 0,
                height: "auto",
                width: { xs: 72, sm: 88, md: 108 },
              }}
            />
            <Stack spacing={1.25} sx={{ maxWidth: 860, minWidth: 0 }}>
              <Typography
                component="p"
                sx={{ color: "var(--lp-brand-accent)" }}
                variant="subtitle2"
              >
                {eyebrow}
              </Typography>
              <Typography
                id={titleId}
                component={titleComponent}
                sx={{ maxWidth: { xs: "12ch", sm: "none" }, textWrap: "balance" }}
                variant={titleVariant}
              >
                {title}
              </Typography>
              <Typography
                sx={{
                  color: alpha(theme.palette.common.white, 0.88),
                  maxWidth: 760,
                  textWrap: "pretty",
                }}
                variant="body1"
              >
                {subtitle}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            alignItems={{ xs: "flex-start", md: "center" }}
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            spacing={1.5}
          >
            {actions ? (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                flexWrap="wrap"
                gap={1.25}
                sx={{
                  "& .MuiButton-outlined": {
                    borderColor: alpha(theme.palette.common.white, 0.24),
                    color: "var(--lp-header-foreground)",
                    "&:hover": {
                      borderColor: alpha(theme.palette.common.white, 0.34),
                      backgroundColor: alpha(theme.palette.common.white, 0.08),
                    },
                  },
                  "& .MuiButton-contained": {
                    boxShadow: "none",
                  },
                }}
              >
                {actions}
              </Stack>
            ) : (
              <Box />
            )}

            {supportingText ? (
              <Typography
                data-testid="page-banner-supporting-text"
                sx={buildBannerSupportTextSx(theme)}
                variant="body2"
              >
                {supportingText}
              </Typography>
            ) : null}
          </Stack>

          <Box
            className="lp-page-banner__divider"
            sx={{ borderBottom: "1px solid var(--lp-banner-divider)" }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
