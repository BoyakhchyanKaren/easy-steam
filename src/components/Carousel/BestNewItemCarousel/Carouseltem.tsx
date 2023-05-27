import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { TextTypography18, PrimaryLightButton } from '@components/common/ui-elements';
import { useCarouselMainStyles } from '../styles';
import { GamesCardProps } from 'types/reduxTypes';
import { dispatch, useAppSelector } from '@redux/hooks';
import { gameMiddleware, gameSelector } from '@redux/slices/games';
import { useRouter } from 'next/router';

export const CarouselItem = ({ item, index }: { item: GamesCardProps, index: number }) => {
    const classes = useCarouselMainStyles();
    const router = useRouter();
    const currentGames = useAppSelector(gameSelector.currentGames);

    const onCardDetailsClick = (itemId: string) => {
        router.push(`/details/${itemId}`);
    };

    const handleClick = (currentGame: GamesCardProps) => {
        dispatch(gameMiddleware.setCurrentGames(currentGame));
    };

    const isButtonDisabled = (itemId: string) => {
        const currentSelectedItem = currentGames.find((element) => element.id === itemId);
        return Boolean(currentSelectedItem);
    };
    const isItemInBasket = isButtonDisabled(item.id);
    const isBasketText = isItemInBasket ? 'В Корзине' : 'В Корзину';

    return (
        <Card className={classes.bestItemRoot} key={index}>
            <CardMedia className={classes.bestItemMedia} image={item.image} />
            <Grid item container direction={"column"} gap={2} alignItems={"center"} justifyContent={"center"}>
                <TextTypography18>The Witcher® 3  WILD HUNT</TextTypography18>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    {item.hasDiscount && <TextTypography18 sx={{ textDecoration: 'line-through' }}>{item.price}</TextTypography18>}
                    <TextTypography18>{item.price}</TextTypography18>
                </Grid>
                <PrimaryLightButton disabled={isItemInBasket} onClick={() => handleClick(item)} fullWidth>{isBasketText}</PrimaryLightButton>
                <PrimaryLightButton fullWidth onClick={() => onCardDetailsClick(item.id)}>Детали</PrimaryLightButton>
            </Grid>
        </Card >
    )
};