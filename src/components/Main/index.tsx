
import PopularNewItemCarousel from "@components/Carousel/PopularNewItemCarousel";
import MainCarousel from "@components/Carousel/MainCarousel";
import BestNewItemCarousel from "@components/Carousel/BestNewItemCarousel";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";

const MainSteam = () => {
    return (
        <Grid container alignItems={"center"} pt={paddings.top24}>
            <MainCarousel />
            <PopularNewItemCarousel />
            <BestNewItemCarousel />
        </Grid>
    )
};

export default MainSteam;