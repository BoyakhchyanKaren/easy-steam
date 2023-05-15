import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { paddings } from 'constants/themeConstants';
import { mainCarouselResponsive } from '@components/Carousel/styles';
import { RenderCarousel } from '@components/Carousel/common';
import { useDetailsCarouselStyles } from './styles';
import { useAppSelector } from '@redux/hooks';
import { gameSelector } from '@redux/slices/games';
import { GamesCardProps } from 'types/reduxTypes';

const DetailsCarousel = () => {
    const classes = useDetailsCarouselStyles();
    const currentGame = useAppSelector(gameSelector.currentGame) as GamesCardProps;
    const detailsPaddings = {
        px: paddings.leftRight8,
        py: 0
    }

    const renderCard = (games?: GamesCardProps) => (
        <Card className={classes.root} key={games?.id}>
            <Grid item container alignItems={"center"}>
                <Grid item xs={12}>
                    <CardMedia className={classes.media} image={games?.image} />
                </Grid>
                <Grid item container direction={"row"} spacing={2}>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={games?.image} />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={games?.image} />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={games?.image} />
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );

    const itemsList = [currentGame, currentGame, currentGame]?.map(renderCard);

    return (
        <RenderCarousel responsive={mainCarouselResponsive} {...detailsPaddings}>
            {itemsList}
        </RenderCarousel>
    )
};

export default DetailsCarousel;