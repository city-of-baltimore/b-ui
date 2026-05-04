import { Theme } from '@mui/material/styles';
import { AppMapAreaLayer } from '../types';
export declare function AppMapSurfaceActions({ areaLayer, onMetricChange, onResetView, theme, }: {
    areaLayer?: AppMapAreaLayer | null;
    onMetricChange?: (metricId: string) => void;
    onResetView?: () => void;
    theme: Theme;
}): import("react/jsx-runtime").JSX.Element | null;
