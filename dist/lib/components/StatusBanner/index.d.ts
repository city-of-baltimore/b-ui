type StatusBannerTone = "info" | "warning" | "error" | "success";
type StatusBannerProps = {
    tone?: StatusBannerTone;
    title: string;
    message: string;
    actionLabel?: string;
    onAction?: () => void;
    testId?: string;
};
export declare function StatusBanner({ tone, title, message, actionLabel, onAction, testId, }: StatusBannerProps): import("react/jsx-runtime").JSX.Element;
export {};
