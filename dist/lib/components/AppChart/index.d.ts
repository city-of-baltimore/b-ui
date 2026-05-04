import { ElementType } from 'react';
export type ChartSeries = {
    label: string;
    data: number[];
    color?: string;
};
type AppChartProps = {
    variant: "bar" | "line";
    title: string;
    description?: string;
    categories: string[];
    series: ChartSeries[];
    loading?: boolean;
    testId?: string;
    titleComponent?: ElementType;
};
export declare function AppChart({ variant, title, description, categories, series, loading, testId, titleComponent, }: AppChartProps): import("react/jsx-runtime").JSX.Element;
export {};
