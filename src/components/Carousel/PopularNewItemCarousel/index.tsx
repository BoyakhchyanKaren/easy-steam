import React from 'react';
import { Grid } from '@mui/material';
import { bestItemCarouselResponsive } from '../styles';
import { RenderCarousel } from '../common';
import { TextTypography18 } from '@components/common/ui-elements';
import { useAppSelector } from '@redux/hooks';
import { gameSelector } from '@redux/slices/games';
import { GamesCardProps } from 'types/reduxTypes';
import { useFilterStyles } from '@components/Filter/helpers';
import { CarouselItem } from './CarouselItem';

const PopularNewItemCarousel = () => {
    const responsiveClasses = useFilterStyles();
    const popularGames = useAppSelector(gameSelector.popularGames);

    const mainCarouselHeader = () => (
        <Grid className={responsiveClasses.responsiveHeader}>
            <TextTypography18>
                ПОПУЛЯРНЫЕ НОВИНКИ
            </TextTypography18>
        </Grid>
    )

    const renderCard = (item: GamesCardProps, index: number) => <CarouselItem key={item.id} item={item} index={index} />

    const itemsList = popularGames?.map(renderCard);

    return (
        <Grid className={responsiveClasses.responsiveItems}>
            <RenderCarousel headerComponent={mainCarouselHeader} responsive={bestItemCarouselResponsive}>
                {itemsList}
            </RenderCarousel>
        </Grid>
    );
};

export default PopularNewItemCarousel;
