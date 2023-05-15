import { Paper, Box, useTheme } from "@mui/material";
import SteamIcon from "assets/icons/SteamIcon/SteamIcon";
import Content from "./Content";
import { TextTypography } from "layout/common";

const Footer = () => {
    const theme = useTheme();

    return (
        <Paper sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, justifyContent: 'center', py: '15px' }}>
                <Box>
                    <SteamIcon />
                </Box>
                <Content />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'space-between' }}>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                    <TextTypography>http//.Link here.com</TextTypography>
                </Box>
            </Box>
        </Paper >
    )
};

export default Footer;