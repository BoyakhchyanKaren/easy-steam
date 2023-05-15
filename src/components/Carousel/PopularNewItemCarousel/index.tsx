import React, { useState } from 'react';
import { Breadcrumbs, Card, CardMedia, Grid, useTheme, } from '@mui/material';
import { carouselWidth } from 'constants/themeConstants';
import { bestItemCarouselResponsive, useCarouselMainStyles } from '../styles';
import { RenderCarousel } from '../common';
import { TextTypography18, PrimaryLightButton } from '@components/common/ui-elements';
import { useRouter } from 'next/router';
import { dispatch, useAppSelector } from '@redux/hooks';
import { gameMiddleware, gameSelector } from '@redux/slices/games';
import { GamesCardProps } from 'types/reduxTypes';

const PopularNewItemCarousel = () => {
    const theme = useTheme();
    const router = useRouter();
    const classes = useCarouselMainStyles();
    const popularGames = useAppSelector(gameSelector.popularGames);
    const currentGames = useAppSelector(gameSelector.currentGames);
    const intialState = new Array(popularGames?.length).fill(false);
    const [buttonStates, setButtonStates] = useState<boolean[]>(intialState);
    const onCardDetailsClick = (itemId: string) => {
        router.push(`/details/${itemId}`);
    };

    const setCurrentItem = (currentItem: GamesCardProps) => {
        dispatch(gameMiddleware.setCurrentGames(currentItem));
    }

    const handleClick = (index: number, currentGame: GamesCardProps) => {
        const newStates = [...buttonStates];
        if (buttonStates[index] === false || !buttonStates[index]) {
            newStates[index] = true;
        } else {
            newStates[index] = false;
        }
        setButtonStates(newStates);
        setCurrentItem(currentGame);
    };

    const buttonStyle = (index: number, itemId: string) => {
        const currentSelectedItem = currentGames.find((element) => element.id === itemId);
        return {
            backgroundColor: buttonStates[index] && currentSelectedItem ? theme.palette.secondary.main : '',
        }
    };


    const mainCarouselHeader = () => (
        <Grid container alignItems={"center"} sx={{ margin: 'auto', width: carouselWidth }}>
            <TextTypography18>
                ПОПУЛЯРНЫЕ НОВИНКИ
            </TextTypography18>
        </Grid>
    )

    const renderCard = (item: GamesCardProps, index: number) => (
        <Card className={classes.bestItemRoot} key={index}>
            <CardMedia className={classes.bestItemMedia} image={item.image} />
            <Grid item container direction={"column"} gap={2} alignItems={"center"} justifyContent={"center"}>
                <TextTypography18>{item.title}</TextTypography18>
                <TextTypography18>{item.price}</TextTypography18>
                <PrimaryLightButton style={buttonStyle(index, item.id)} onClick={() => handleClick(index, item)} fullWidth>В Корзину</PrimaryLightButton>
                <PrimaryLightButton fullWidth onClick={() => onCardDetailsClick(item.id)}>Детали</PrimaryLightButton>
            </Grid>
        </Card >
    );

    const itemsList = popularGames?.map(renderCard);

    return (
        <RenderCarousel headerComponent={mainCarouselHeader} responsive={bestItemCarouselResponsive}>
            {itemsList}
        </RenderCarousel>
    );
};

export default PopularNewItemCarousel;
