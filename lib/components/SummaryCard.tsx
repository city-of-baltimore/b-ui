import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { SectionSurface } from "./SectionSurface";
import { buildSummaryCardSx } from "./surfaceStyles";


type SummaryCardProps = {
  actionLabel?: string;
  onAction?: () => void;
  label: string;
  value: string;
  description?: string;
  selected?: boolean;
  testId?: string;
  tone?: "default" | "accent";
};

export function SummaryCard({
  actionLabel,
  onAction,
  label,
  value,
  description,
  selected = false,
  testId = "summary-card",
  tone = "default",
}: SummaryCardProps) {
  const theme = useTheme();
  const interactive = Boolean(onAction);

  return (
    <SectionSurface
      aria-pressed={interactive ? selected : undefined}
      component={interactive ? "button" : undefined}
      data-interactive={interactive ? "true" : "false"}
      data-selected={selected ? "true" : "false"}
      data-testid={testId}
      padding="compact"
      tone={tone === "accent" ? "hero" : "soft"}
      sx={buildSummaryCardSx(theme, { interactive, selected, tone })}
      onClick={onAction}
    >
      <Stack spacing={1.25}>
        <Typography component="p" sx={{ color: "var(--lp-eyebrow-text)" }} variant="subtitle2">
          {label}
        </Typography>
        <Typography component="p" sx={{ lineHeight: 1.1 }} variant="h3">
          {value}
        </Typography>
        {description ? (
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        ) : null}
        {actionLabel ? (
          <Typography
            color={interactive ? "primary.main" : "text.secondary"}
            variant="caption"
          >
            {actionLabel}
          </Typography>
        ) : null}
      </Stack>
    </SectionSurface>
  );
}
