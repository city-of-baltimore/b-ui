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
/**
 * Provides the canonical Launchpad ranked-comparison list so neighborhood and
 * category summaries do not drift into local progress-card variants.
 */
export declare function ProgressBarList({ title, description, items, activeId, onItemClick, tone, testId, }: ProgressBarListProps): import("react/jsx-runtime").JSX.Element;
export {};
