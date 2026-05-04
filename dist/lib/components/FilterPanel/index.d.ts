import { ElementType, ReactNode } from 'react';
type FilterPanelProps = {
    title: string;
    description?: string;
    actions?: ReactNode;
    children: ReactNode;
    titleComponent?: ElementType;
};
export declare function FilterPanel({ title, description, actions, children, titleComponent, }: FilterPanelProps): import("react/jsx-runtime").JSX.Element;
export {};
