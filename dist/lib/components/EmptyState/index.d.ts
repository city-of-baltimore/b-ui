import { ElementType } from 'react';
type EmptyStateProps = {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    testId?: string;
    titleComponent?: ElementType;
};
export declare function EmptyState({ title, description, actionLabel, onAction, testId, titleComponent, }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
export {};
