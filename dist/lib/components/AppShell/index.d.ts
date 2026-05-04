import { PropsWithChildren, ReactNode } from 'react';
type AppShellProps = PropsWithChildren<{
    actions?: ReactNode;
    eyebrow: string;
    subtitle: string;
    supportingText?: string;
    title: string;
}>;
export declare function AppShell({ actions, eyebrow, subtitle, supportingText, title, children, }: AppShellProps): import("react/jsx-runtime").JSX.Element;
export {};
