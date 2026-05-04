import { ElementType } from 'react';
type ErrorStateProps = {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
    requestId?: string;
    supportEmail?: string;
    supportLabel?: string;
    supportPhone?: string;
    testId?: string;
    titleComponent?: ElementType;
};
export declare function ErrorState({ title, description, actionLabel, onAction, requestId, supportEmail, supportLabel, supportPhone, testId, titleComponent, }: ErrorStateProps): import("react/jsx-runtime").JSX.Element;
export {};
