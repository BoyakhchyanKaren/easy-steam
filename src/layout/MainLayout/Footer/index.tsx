import { Paper, Box } from "@mui/material";
import SteamIcon from "assets/icons/SteamIcon/SteamIcon";
import Content from "./Content";
import { TextTypography } from "layout/common";

const Footer = () => {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#343434' }}>
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