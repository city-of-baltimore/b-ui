import { PaperProps } from '@mui/material';
import { PropsWithChildren } from 'react';
import { SectionSurfacePadding, SectionSurfaceTone } from '../surfaceStyles';
type SectionSurfaceProps = PropsWithChildren<PaperProps & {
    padding?: SectionSurfacePadding;
    tone?: SectionSurfaceTone;
}>;
export declare function SectionSurface({ children, padding, tone, sx, ...paperProps }: SectionSurfaceProps): import("react/jsx-runtime").JSX.Element;
export {};
