import { TypographyProps } from '@mui/material';
import { ReactNode } from 'react';
export type SurfaceHeaderProps = {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    testId?: string;
    titleVariant?: TypographyProps["variant"];
    titleComponent?: TypographyProps["component"];
};
export declare function SurfaceHeader({ eyebrow, title, description, actions, testId, titleVariant, titleComponent, }: SurfaceHeaderProps): import("react/jsx-runtime").JSX.Element;
