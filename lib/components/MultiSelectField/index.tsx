import {
    Autocomplete,
    // Chip
    Stack, TextField, Typography
} from "@mui/material";


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

export function MultiSelectField({
    label,
    options,
    value,
    onChange,
    // testId,
}: MultiSelectFieldProps) {
    const selectedOptions = options.filter((option) => value.includes(option.value));

    return (
        <Autocomplete
            multiple
            disableCloseOnSelect
            limitTags={2}
            options={options}
            value={selectedOptions}
            getOptionLabel={(option) => option.label}
            isOptionEqualToValue={(option, selected) => option.value === selected.value}
            onChange={(_event, nextSelected) => onChange(nextSelected.map((option) => option.value))}
            // renderTags={(selected, getTagProps) =>
            //     selected.map((option: any, index: number) => (
            //         <Chip
            //             {...getTagProps({ index })}
            //             key={option.value}
            //             label={option.label}
            //             size="small"
            //         />
            //     ))
            // }
            renderInput={(params) => (
                <TextField
                    {...params}
                    // inputProps={{
                    //     ...params.inputProps,
                    //     "data-testid": testId,
                    // }}
                    label={label}
                    size="small"
                />
            )}
            renderOption={(props, option) => (
                <li {...props} key={option.value}>
                    <Stack
                        // alignItems="center"
                        direction="row"
                        // justifyContent="space-between"
                        spacing={2}
                        sx={{ width: "100%" }}
                    >
                        <Typography variant="body2">{option.label}</Typography>
                        {option.count !== undefined ? (
                            <Typography color="text.secondary" variant="caption">
                                {option.count.toLocaleString()}
                            </Typography>
                        ) : null}
                    </Stack>
                </li>
            )}
        />
    );
}
