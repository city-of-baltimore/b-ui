import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import {
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import cityOfBaltimoreLogo from "../../assets/branding/city-of-baltimore-logo.png";
import { useColorMode } from "../colorMode";
import { messages } from "../i18n/messages";
import { buildChromeUtilityButtonSx, buildFixedChromeSx } from "../surfaceStyles";


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

function getAppearanceLabel(mode: AppearanceMode) {
    if (mode === "system") {
        return messages.app.systemAppearance;
    }

    return `${mode[0].toUpperCase()}${mode.slice(1)} mode`;
}

export function AppHeader({
    appearanceModes,
    cityName,
    homePath,
    maxWidthPx,
    productTitle,
    showStaffLink,
    staffLabel,
    staffPath,
}: AppHeaderProps) {
    const theme = useTheme();
    const { preference, setPreference } = useColorMode();
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
    const utilityMenuOpen = Boolean(menuAnchor);

    return (
        <Box
            className="lp-app-header"
            component="header"
            data-testid="app-header"
            sx={buildFixedChromeSx(theme)}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: maxWidthPx,
                    px: { xs: 2, sm: 3 },
                }}
            >
                <Stack
                    // alignItems="center"
                    className="lp-app-header__inner"
                    direction="row"
                    // justifyContent="space-between"
                    spacing={2}
                >
                    <Stack
                        // alignItems="center"
                        component={RouterLink}
                        direction="row"
                        spacing={1.5}
                        sx={{
                            color: "inherit",
                            flex: 1,
                            minWidth: 0,
                            textDecoration: "none",
                        }}
                        to={homePath}
                    >
                        <Box
                            alt={`${cityName} logo`}
                            component="img"
                            src={cityOfBaltimoreLogo}
                            sx={{
                                flexShrink: 0,
                                height: { xs: 34, sm: 38 },
                                width: { xs: 34, sm: 38 },
                            }}
                        />
                        <Box sx={{ minWidth: 0 }}>
                            <Typography
                                component="p"
                                sx={{ color: "var(--lp-brand-accent)" }}
                                variant="subtitle2"
                            >
                                {cityName}
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                }}
                                variant="body1"
                            >
                                {productTitle}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={1}>
                        {showStaffLink ? (
                            <Button
                                component={RouterLink}
                                data-testid="app-header-staff-link"
                                sx={{
                                    ...buildChromeUtilityButtonSx(theme),
                                    display: { xs: "none", sm: "inline-flex" },
                                    px: 1.75,
                                }}
                                to={staffPath}
                                variant="outlined"
                            >
                                {staffLabel}
                            </Button>
                        ) : null}

                        <IconButton
                            aria-controls={utilityMenuOpen ? "app-header-menu" : undefined}
                            aria-expanded={utilityMenuOpen ? "true" : undefined}
                            aria-haspopup="menu"
                            aria-label={messages.app.openApplicationMenu}
                            data-testid="app-header-menu-button"
                            onClick={(event) => setMenuAnchor(event.currentTarget)}
                            sx={buildChromeUtilityButtonSx(theme)}
                        >
                            <MenuRoundedIcon />
                        </IconButton>

                        <Menu
                            anchorEl={menuAnchor}
                            id="app-header-menu"
                            // MenuListProps={{ "aria-label": "Application menu" }}
                            open={utilityMenuOpen}
                            onClose={() => setMenuAnchor(null)}
                        >
                            {appearanceModes.map((mode) => (
                                <MenuItem
                                    key={mode}
                                    selected={preference === mode}
                                    onClick={() => {
                                        setPreference(mode);
                                        setMenuAnchor(null);
                                    }}
                                >
                                    {getAppearanceLabel(mode)}
                                </MenuItem>
                            ))}
                            {showStaffLink ? (
                                <MenuItem
                                    component={RouterLink}
                                    to={staffPath}
                                    onClick={() => setMenuAnchor(null)}
                                >
                                    {staffLabel}
                                </MenuItem>
                            ) : null}
                        </Menu>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
