import { TextTypography16 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";

const Content = () => {
    return (
        <Grid item container md={7} lg={6} xl={4} sx={{ textAlign: 'center' }}>
            <TextTypography16>
                It is a long established fact that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
            </TextTypography16>
        </Grid>
    )
};

export default Content;