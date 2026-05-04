import { ReactNode } from 'react';
type DetailsDrawerProps = {
    open: boolean;
    title: string;
    subtitle?: string;
    onClose: () => void;
    children: ReactNode;
};
export declare function DetailsDrawer({ open, title, subtitle, onClose, children, }: DetailsDrawerProps): import("react/jsx-runtime").JSX.Element;
export {};
