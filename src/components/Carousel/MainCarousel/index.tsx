import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { margins, paddings } from 'constants/themeConstants';
import { mainCarouselResponsive, useCarouselMainStyles } from '../styles';
import { RenderCarousel } from '../common';
import { MainCarouselButton } from '../common/ui-elements';
import Filter from '@components/Filter';
import { DiscountButton, TextTypography22 } from '@components/common/ui-elements';

import { GameImagesProps, GamesCardProps, IGamesProps } from 'types/reduxTypes';
import { dispatch, useAppSelector } from '@redux/hooks';
import { gameMiddleware, gameSelector } from '@redux/slices/games';
import { useRouter } from 'next/router';

const MainCarousel = () => {
    const classes = useCarouselMainStyles();
    const allGames = useAppSelector(gameSelector.allGames);
    const { push } = useRouter();
    const gameImages = useAppSelector(gameSelector.gameImages);
    const redirectToDetailsPage = (itemId: string) => {
        push(`/details/${itemId}`);
    };

    const onBasketPageClick = (imageId: string) => {
        const currentGame = allGames.find((game) => game.id === imageId);
        dispatch(gameMiddleware.setCurrentGames(currentGame as GamesCardProps));
        push('/basket');
    };

    const mainCarouselHeader = () => <Filter />;

    const renderCard = (imageItems: GameImagesProps) => (
        <Card className={classes.root} key={imageItems.id}>
            <Grid item container alignItems={"center"} justifyContent={"space-between"}>
                <CardMedia className={classes.media} image={imageItems.mainImage}>
                    <MainCarouselButton onClick={() => onBasketPageClick(imageItems.id)}>В Корзину</MainCarouselButton>
                </CardMedia>
                <Grid item container direction={"column"} className={classes.smallMediaRoot}>
                    <Grid item container alignItems={"center"} justifyContent={"center"}>
                        <TextTypography22>Одни из нас™: Часть I</TextTypography22>
                    </Grid>
                    <Grid item container direction={"row"} mt={margins.top12} mb={margins.bottom20}>
                        <CardMedia className={classes.smallMedia} image={imageItems.subImages.top.firstImage} />
                        <CardMedia className={classes.smallMedia} image={imageItems.subImages.top.secondImage} />
                    </Grid>
                    <Grid item container direction={"row"}>
                        <CardMedia className={classes.smallMedia} image={imageItems.subImages.bottom.firstImage} />
                        <CardMedia className={classes.smallMedia} image={imageItems.subImages.bottom.secondImage} />
                    </Grid>
                    <DiscountButton px={paddings.all32} py={paddings.all6} price={"20 $"} onClick={() => redirectToDetailsPage(imageItems.id)} />
                </Grid>
            </Grid>
        </Card >
    );

    const itemsList = gameImages?.map(renderCard);

    return (
        <RenderCarousel headerComponent={mainCarouselHeader} responsive={mainCarouselResponsive}>
            {itemsList}
        </RenderCarousel>
    );
};

export default MainCarousel;
