
import PopularNewItemCarousel from "@components/Carousel/PopularNewItemCarousel";
import MainCarousel from "@components/Carousel/MainCarousel";
import BestNewItemCarousel from "@components/Carousel/BestNewItemCarousel";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { useEffect } from "react";
import { dispatch } from "@redux/hooks";
import { gameMiddleware } from "@redux/slices/games";

const MainSteam = () => {
    useEffect(() => {
        dispatch(gameMiddleware.getGames());
    }, []);

    return (
        <Grid container alignItems={"center"} pt={paddings.top24}>
            <MainCarousel />
            <PopularNewItemCarousel />
            <BestNewItemCarousel />
        </Grid>
    )
};

export default MainSteam;