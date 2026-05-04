export type MultiSelectOption = {
    value: string;
    label: string;
    count?: number;
};
type MultiSelectFieldProps = {
    label: string;
    options: MultiSelectOption[];
    value: string[];
    onChange: (nextValue: string[]) => void;
    testId?: string;
};
export declare function MultiSelectField({ label, options, value, onChange, }: MultiSelectFieldProps): import("react/jsx-runtime").JSX.Element;
export {};
