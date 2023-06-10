import { TextTypography22, TextTypography32 } from "@components/common/ui-elements";
import { Divider, Grid, useTheme } from "@mui/material";

export default function Custom404() {
    const theme = useTheme();
    return (
        <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
            minHeight={"calc(100vh - 300px)"}
            gap={3}
        >
            <TextTypography32 sx={{
                fontWeight: 600,
                color: theme.palette.common.white
            }}>
                404
            </TextTypography32>
            <Divider orientation="vertical" sx={{
                backgroundColor: theme.palette.common.white,
                width: '2px',
                height: '50px'
            }} />
            <TextTypography22>This page could not be found</TextTypography22>
        </Grid>
    )
}