import { TypographyProps } from '@mui/material';
import { ElementType, ReactNode } from 'react';
type PageBannerProps = {
    actions?: ReactNode;
    eyebrow: string;
    maxWidthPx: number;
    subtitle: string;
    supportingText?: string;
    title: string;
    titleComponent?: ElementType;
    titleVariant?: TypographyProps["variant"];
};
export declare function PageBanner({ actions, eyebrow, maxWidthPx, subtitle, supportingText, title, titleComponent, titleVariant, }: PageBannerProps): import("react/jsx-runtime").JSX.Element;
export {};
