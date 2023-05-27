import { CarouselItem } from "@components/Carousel/PopularNewItemCarousel/CarouselItem";
import { Grid } from "@mui/material";
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";
import { paddings } from "constants/themeConstants";
import { useListStyles } from "./styles";
import FilterHeader from "./FilterHeader";

const ListOfItems = () => {
    const popularGames = useAppSelector(gameSelector.popularGames) ?? [];
    const bestGames = useAppSelector(gameSelector.bestGames) ?? [];
    const listClasses = useListStyles();
    const allGames = [
        ...popularGames,
        ...bestGames,
    ];

    return (
        <Grid container direction={"column"} pt={paddings.top16} gap={2} className={listClasses.itemContainer}>
            <Grid item paddingLeft={paddings.left8}>
                <FilterHeader />
            </Grid>
            <Grid container direction={"row"} gap={3}>
                {
                    allGames.map((games, index) => {
                        return (
                            <CarouselItem key={games.id} item={games} index={index} />
                        )
                    })
                }
            </Grid>
        </Grid>
    );
};

export default ListOfItems;