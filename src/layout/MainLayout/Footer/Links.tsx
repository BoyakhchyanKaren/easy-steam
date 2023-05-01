import { Box } from "@mui/material";
import { TextTypography } from "layout/common";

const Links = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'space-between' }}>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
            <TextTypography>http//.Link here.com</TextTypography>
        </Box>
    );
};

export default Links;