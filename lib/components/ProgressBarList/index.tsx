import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";


export type ProgressBarDatum = {
  id: string;
  label: string;
  value: number;
  progressPercent: number;
  supportingText?: string;
};

type ProgressBarListProps = {
  title?: string;
  description?: string;
  items: ProgressBarDatum[];
  activeId?: string | null;
  onItemClick?: (item: ProgressBarDatum) => void;
  tone?: "primary" | "accent" | "supporting";
  testId?: string;
};

function resolveFillVariable(tone: NonNullable<ProgressBarListProps["tone"]>) {
  if (tone === "primary") {
    return "var(--lp-progress-fill-primary)";
  }
  if (tone === "supporting") {
    return "var(--lp-progress-fill-supporting)";
  }
  return "var(--lp-progress-fill-accent)";
}

/**
 * Provides the canonical Launchpad ranked-comparison list so neighborhood and
 * category summaries do not drift into local progress-card variants.
 */
export function ProgressBarList({
  title,
  description,
  items,
  activeId = null,
  onItemClick,
  tone = "accent",
  testId,
}: ProgressBarListProps) {
  const theme = useTheme();
  const fill = resolveFillVariable(tone);

  return (
    <Stack spacing={title || description ? 2 : 1.5}>
      {title || description ? (
        <Box>
          {title ? (
            <Typography component="p" variant="h5">
              {title}
            </Typography>
          ) : null}
          {description ? (
            <Typography color="text.secondary" sx={{ mt: 0.75 }} variant="body2">
              {description}
            </Typography>
          ) : null}
        </Box>
      ) : null}

      <Stack data-testid={testId} spacing={1.35}>
        {items.map((item) => {
          const active = item.id === activeId;
          const interactive = Boolean(onItemClick);
          const content = (
            <Stack
              spacing={1}
              sx={{
                p: 1.5,
                borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
                border: `1px solid ${
                  active
                    ? alpha(theme.palette.primary.main, theme.palette.mode === "dark" ? 0.42 : 0.28)
                    : "var(--lp-border-soft)"
                }`,
                background: active
                  ? theme.palette.mode === "dark"
                    ? alpha(theme.palette.primary.main, 0.12)
                    : alpha(theme.palette.primary.main, 0.05)
                  : alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.76 : 0.9),
                transition: "background-color 160ms ease, border-color 160ms ease, transform 160ms ease",
              }}
            >
              <Stack
                alignItems="baseline"
                direction="row"
                justifyContent="space-between"
                spacing={1.5}
              >
                <Typography component="p" variant="h5">
                  {item.label}
                </Typography>
                <Typography component="p" variant="h5">
                  {item.value.toLocaleString()}
                </Typography>
              </Stack>
              <Box
                aria-hidden="true"
                sx={{
                  height: 20,
                  borderRadius: `${theme.launchpadTokens.radii.pill}px`,
                  background: "var(--lp-progress-track)",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${Math.max(0, Math.min(item.progressPercent, 100))}%`,
                    height: "100%",
                    background: fill,
                    borderRadius: `${theme.launchpadTokens.radii.pill}px`,
                  }}
                />
              </Box>
              {item.supportingText ? (
                <Typography color="text.secondary" variant="body2">
                  {item.supportingText}
                </Typography>
              ) : null}
            </Stack>
          );

          if (!interactive) {
            return (
              <Box data-testid={testId ? `${testId}-item` : undefined} key={item.id}>
                {content}
              </Box>
            );
          }

          return (
            <ButtonBase
              aria-label={`${item.label}, ${item.value.toLocaleString()}`}
              aria-pressed={active}
              data-testid={testId ? `${testId}-item` : undefined}
              focusRipple={false}
              key={item.id}
              sx={{
                display: "block",
                textAlign: "left",
                width: "100%",
                borderRadius: `${theme.launchpadTokens.radii.surface - 2}px`,
                "&:hover > div": {
                  transform: "translateY(-1px)",
                  background:
                    theme.palette.mode === "dark"
                      ? alpha(theme.palette.primary.main, active ? 0.14 : 0.09)
                      : alpha(theme.palette.primary.main, active ? 0.06 : 0.03),
                },
              }}
              onClick={() => onItemClick?.(item)}
            >
              {content}
            </ButtonBase>
          );
        })}
      </Stack>
    </Stack>
  );
}
