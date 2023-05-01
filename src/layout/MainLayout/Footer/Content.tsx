import { Grid } from "@mui/material";
import { TextTypography } from "layout/common";

const Content = () => {
    return (
        <Grid item container xs={4.5} sx={{ textAlign: 'center' }}>
            <TextTypography>
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
            </TextTypography>
        </Grid>
    )
};

export default Content;