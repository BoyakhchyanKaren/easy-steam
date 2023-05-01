import { CustomDivider, TextTypography16, TextTypography22 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import DetailsCarousel from "./DetailsCarousel";
import DetailsSide from "./DetailsSide";
import AboutGame from "./AboutGame";
import AdultsOnly from "./AdultsOnly";
import SystemNeeds from "./SystemNeeds";

const Details = () => {
    return (
        <Grid container direction={"column"} alignItems={"center"} pt={paddings.top24} pb={paddings.bottom64}>
            <Grid container direction={"row"} item xs={12} gap={4}>
                <Grid item xs={8}>
                    <TextTypography22>Детали</TextTypography22>
                    <CustomDivider sx={{ marginTop: 1 }} />
                </Grid>
                <Grid item container direction={"row"} xs={12}>
                    <Grid item xs={8}>
                        <DetailsCarousel />
                    </Grid>
                    <DetailsSide />
                </Grid>
                <Grid item container direction={"column"} alignItems={"flex-start"} xs={10} gap={3}>
                    <AboutGame />
                    <AdultsOnly />
                    <SystemNeeds />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Details;