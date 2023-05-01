import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';
import { margins, paddings } from 'constants/themeConstants';
import { DiscountButton, TextTypography22 } from '@components/common/ui-elements';
import { MainCarouselButton } from '@components/Carousel/common/ui-elements';
import { mainCarouselResponsive } from '@components/Carousel/styles';
import { items } from '@components/Carousel/MainCarousel/helpers';
import { RenderCarousel } from '@components/Carousel/common';
import { useDetailsCarouselStyles } from './styles';

const DetailsCarousel = () => {
    const classes = useDetailsCarouselStyles();

    const detailsPaddings = {
        px: paddings.leftRight8,
        py: 0
    }

    const renderCard = (imageItems: { image: string }, index: number) => (
        <Card className={classes.root} key={index}>
            <Grid item container alignItems={"center"}>
                <Grid item xs={12}>
                    <CardMedia className={classes.media} image={imageItems.image} />
                </Grid>
                <Grid item container direction={"row"} spacing={2}>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                    </Grid>
                    <Grid item xs={4}>
                        <CardMedia className={classes.smallMedia} image={imageItems.image} />
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );

    const itemsList = items.map(renderCard);

    return (
        <RenderCarousel responsive={mainCarouselResponsive} {...detailsPaddings}>
            {itemsList}
        </RenderCarousel>
    )
};

export default DetailsCarousel;