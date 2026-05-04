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
export declare function SummaryCard({ actionLabel, onAction, label, value, description, selected, testId, tone, }: SummaryCardProps): import("react/jsx-runtime").JSX.Element;
export {};
