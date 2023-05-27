import { Paper, Box, useTheme } from "@mui/material";
import SteamIcon from "assets/icons/SteamIcon/SteamIcon";
import Content from "./Content";
import { TextTypography16 } from "@components/common/ui-elements";
import Links from "./Links";

const Footer = () => {
    const theme = useTheme();

    return (
        <Paper sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, justifyContent: 'center', py: '15px' }}>
                <Box>
                    <SteamIcon />
                </Box>
                <Content />
                <Links />
            </Box>
        </Paper >
    )
};

export default Footer;