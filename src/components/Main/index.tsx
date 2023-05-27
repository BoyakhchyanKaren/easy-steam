
import PopularNewItemCarousel from "@components/Carousel/PopularNewItemCarousel";
import MainCarousel from "@components/Carousel/MainCarousel";
import BestNewItemCarousel from "@components/Carousel/BestNewItemCarousel";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { useEffect } from "react";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware } from "@redux/slices/games";
import Filter from "@components/Filter";
import { infoSelector } from "@redux/slices/info";
import ListOfItems from "@components/List";

const MainSteam = () => {
    const selectItemValue = useAppSelector(infoSelector.selectItemValue);
    const minPrice = useAppSelector(infoSelector.minPrice);
    const maxPrice = useAppSelector(infoSelector.maxPrice);
    const selectedFilterItems = useAppSelector(infoSelector.selectedFilterItems);
    const hasDiscount = useAppSelector(infoSelector.hasDiscount);
    const searchValue = useAppSelector(infoSelector.searchValue);
    const shouldShowList = selectItemValue || minPrice || maxPrice || hasDiscount || selectedFilterItems.length || searchValue;

    useEffect(() => {
        dispatch(gameMiddleware.getGames());
    }, []);

    return (
        <Grid container alignItems={"center"} pt={paddings.top24}>
            <Filter />
            {
                shouldShowList ? (
                    <ListOfItems />
                ) : (
                    <>
                        <MainCarousel />
                        <PopularNewItemCarousel />
                        <BestNewItemCarousel />
                    </>
                )
            }
        </Grid>
    )
};

export default MainSteam;