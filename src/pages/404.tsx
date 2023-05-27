import { TextTypography22 } from "@components/common/ui-elements";
import { Grid, Typography, useTheme } from "@mui/material";

export default function Custom404() {
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            minHeight={"calc(100vh - 300px)"}
        >
            <TextTypography22 sx={{ fontWeight: 500, color: (theme) => theme.palette.common.white }}>
                404 - Page Not Found
            </TextTypography22>
        </Grid>
    )
}