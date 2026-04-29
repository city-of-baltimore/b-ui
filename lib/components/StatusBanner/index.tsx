import { Alert, AlertTitle, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { buildStatusBannerSx } from "./surfaceStyles";


type StatusBannerTone = "info" | "warning" | "error" | "success";

type StatusBannerProps = {
  tone?: StatusBannerTone;
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
  testId?: string;
};

export function StatusBanner({
  tone = "info",
  title,
  message,
  actionLabel,
  onAction,
  testId = "status-banner",
}: StatusBannerProps) {
  const theme = useTheme();

  return (
    <Alert
      action={
        actionLabel && onAction ? (
          <Button color="inherit" size="small" onClick={onAction}>
            {actionLabel}
          </Button>
        ) : null
      }
      data-testid={testId}
      role={tone === "error" ? "alert" : "status"}
      severity={tone}
      sx={buildStatusBannerSx(theme, tone)}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
}
