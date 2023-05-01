import React, { useState } from 'react';
import { Card, CardMedia, Grid, useTheme, } from '@mui/material';
import { carouselWidth } from 'constants/themeConstants';
import { bestItemCarouselResponsive, useCarouselMainStyles } from '../styles';
import { RenderCarousel } from '../common';
import { TextTypography18, PrimaryLightButton } from '@components/common/ui-elements';
import { useRouter } from 'next/router';
import { items } from './helpers';

const BestNewItemCarousel = () => {
    const theme = useTheme();
    const router = useRouter();
    const classes = useCarouselMainStyles();
    const intialState = new Array(items.length).fill(false);
    const [buttonStates, setButtonStates] = useState<boolean[]>(intialState);
    const onCardDetailsClick = (itemId: string) => {
        router.push(`/details/${itemId}`);
    };

    const handleClick = (index: number) => {
        const newStates = [...buttonStates];
        if (buttonStates[index] === false) {
            newStates[index] = true;
            setButtonStates(newStates);
        } else {
            newStates[index] = false;
            setButtonStates(newStates);
        }
    };

    const buttonStyle = (index: number) => ({
        backgroundColor: buttonStates[index] ? theme.palette.secondary.main : '',
    });

    const mainCarouselHeader = () => (
        <Grid container alignItems={"center"} sx={{ margin: 'auto', width: carouselWidth }}>
            <TextTypography18>
                ОТЛИЧНЫЕ ПРЕДЛОЖЕНИЯ
            </TextTypography18>
        </Grid>
    )

    const renderCard = (item: { image: string, id: string }, index: number) => (
        <Card className={classes.bestItemRoot} key={index}>
            <CardMedia className={classes.bestItemMedia} image={item.image} />
            <Grid item container direction={"column"} gap={2} alignItems={"center"} justifyContent={"center"}>
                <TextTypography18>The Witcher® 3  WILD HUNT</TextTypography18>
                <Grid container direction={"row"} justifyContent={"center"} alignItems={"center"} gap={2}>
                    <TextTypography18 sx={{ textDecoration: 'line-through' }}>19.09$</TextTypography18>
                    <TextTypography18>19.09$</TextTypography18>
                </Grid>
                <PrimaryLightButton style={buttonStyle(index)} onClick={() => handleClick(index)} fullWidth>В Корзину</PrimaryLightButton>
                <PrimaryLightButton fullWidth onClick={() => onCardDetailsClick(item.id)}>Детали</PrimaryLightButton>
            </Grid>
        </Card >
    );

    const itemsList = items.map(renderCard);

    return (
        <RenderCarousel headerComponent={mainCarouselHeader} responsive={bestItemCarouselResponsive}>
            {itemsList}
        </RenderCarousel>
    );
};

export default BestNewItemCarousel;
