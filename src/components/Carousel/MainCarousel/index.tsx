import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { margins, paddings } from 'constants/themeConstants';
import { mainCarouselResponsive, useCarouselMainStyles } from '../styles';
import { RenderCarousel } from '../common';
import { MainCarouselButton } from '../common/ui-elements';
import Filter from '@components/Filter';
import { DiscountButton, TextTypography22 } from '@components/common/ui-elements';
import { items } from './helpers';

const MainCarousel = () => {
    const classes = useCarouselMainStyles();

    const mainCarouselHeader = () => <Filter />;

    const renderCard = (imageItems: { image: string }, index: number) => (
        <Card className={classes.root} key={index}>
            <Grid item container alignItems={"center"} justifyContent={"space-between"}>
                <CardMedia className={classes.media} image={imageItems.image}>
                    <MainCarouselButton>В Корзину</MainCarouselButton>
                </CardMedia>
                <Grid item container direction={"column"} className={classes.smallMediaRoot}>
                    <Grid item container alignItems={"center"} justifyContent={"center"}>
                        <TextTypography22>Одни из нас™: Часть I</TextTypography22>
                    </Grid>
                    <Grid item container direction={"row"} mt={margins.top12} mb={margins.bottom20}>
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                    </Grid>
                    <Grid item container direction={"row"}>
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                    </Grid>
                    <DiscountButton px={paddings.all32} py={paddings.all6} />
                </Grid>
            </Grid>
        </Card >
    );

    const itemsList = items.map(renderCard);

    return (
        <RenderCarousel headerComponent={mainCarouselHeader} responsive={mainCarouselResponsive}>
            {itemsList}
        </RenderCarousel>
    );
};

export default MainCarousel;
