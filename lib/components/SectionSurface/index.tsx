import { Paper, type PaperProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { type PropsWithChildren } from "react";

import {
    buildSectionSurfaceSx,
    type SectionSurfacePadding,
    type SectionSurfaceTone,
} from "../surfaceStyles";

type SectionSurfaceProps = PropsWithChildren<
    PaperProps & {
        padding?: SectionSurfacePadding;
        tone?: SectionSurfaceTone;
    }
>;

export function SectionSurface({
    children,
    padding = "default",
    tone = "default",
    sx,
    ...paperProps
}: SectionSurfaceProps) {
    const theme = useTheme();

    return (
        <Paper
            elevation={0}
            sx={[
                buildSectionSurfaceSx(theme, { padding, tone }),
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            {...paperProps}
        >
            {children}
        </Paper>
    );
}
