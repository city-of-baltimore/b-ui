import { Theme } from '@mui/material/styles';
import { AppMapPointLayerState } from '../mapPolicy';
import { AppMapAreaLayer } from '../types';
export declare function AppMapLegend({ areaLayer, legendTitles, pointLayerState, statusColors, theme, }: {
    areaLayer?: AppMapAreaLayer | null;
    legendTitles?: {
        areaTitle: string;
        pointTitle: string;
    };
    pointLayerState: AppMapPointLayerState;
    statusColors: Record<string, string>;
    theme: Theme;
}): import("react/jsx-runtime").JSX.Element;
