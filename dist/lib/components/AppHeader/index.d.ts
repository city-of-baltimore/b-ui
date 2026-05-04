type AppearanceMode = "light" | "dark" | "system";
type AppHeaderProps = {
    appearanceModes: readonly AppearanceMode[];
    cityName: string;
    homePath: string;
    maxWidthPx: number;
    productTitle: string;
    showStaffLink: boolean;
    staffLabel: string;
    staffPath: string;
};
export declare function AppHeader({ appearanceModes, cityName, homePath, maxWidthPx, productTitle, showStaffLink, staffLabel, staffPath, }: AppHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
