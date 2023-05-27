import React, { useMemo } from "react";
import { Button, Grid, useTheme } from "@mui/material";
import { TextTypography18, TextTypography16, SecondaryLigtButton, PrimaryLightButton, ButtonWitoutDiscount, TextTypography22 } from "@components/common/ui-elements";
import { margins } from "constants/themeConstants";
import { useRouter } from "next/router";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware, gameSelector } from "@redux/slices/games";
import { GamesCardProps } from "types/reduxTypes";
import { useDetailsCarouselStyles } from "./styles";

const DetailsSide = () => {
    const theme = useTheme();
    const { push } = useRouter();
    const classes = useDetailsCarouselStyles();
    const currentGame = useAppSelector(gameSelector.currentGame);
    const currentGames = useAppSelector(gameSelector.currentGames);
    const onBasketPageClick = () => {
        dispatch(gameMiddleware.setCurrentGames(currentGame as GamesCardProps));
    };

    const onPaymentPageClick = () => {
        push('/payment');
    }

    const isItemInBasket = !!useMemo(() => currentGames.find((game) => game.id === currentGame?.id), [currentGame, currentGames]);
    const isBasketText = isItemInBasket ? 'В Корзине' : 'В Корзину';

    return (
        <Grid item xs={3} container direction={"column"} alignItems={"flex-start"} gap={4} ml={margins.left60} mt={margins.top16}>
            <TextTypography18>{currentGame?.title}</TextTypography18>
            <TextTypography16>
                {currentGame?.description}
            </TextTypography16>
            <TextTypography16>
                {`ДАТА ВЫХОДА: ${currentGame?.dateOfCreation}`}
            </TextTypography16>
            {!isItemInBasket && <SecondaryLigtButton fullWidth onClick={onPaymentPageClick}>Купить Сейчас!</SecondaryLigtButton>}
            <PrimaryLightButton disabled={isItemInBasket} fullWidth onClick={onBasketPageClick}>{isBasketText}</PrimaryLightButton>
            {
                currentGame?.hasDiscount ? (
                    <>
                        <Grid container direction={"row"} alignItems={"center"} flexWrap={"nowrap"} justifyContent={"center"}>
                            <Grid item md={3} lg={4} xl={5}>
                                <Button variant="contained" fullWidth className={classes.discountButton}>
                                    <TextTypography22>{currentGame.price}</TextTypography22>
                                </Button>
                            </Grid>
                            <Grid item md={12} lg={11} xl={11} className={classes.discountContainer}>
                                <Button variant="contained" fullWidth className={classes.pricesButton}>
                                    <TextTypography22 sx={{ textDecoration: 'line-through', color: theme.palette.common.black }}>
                                        {currentGame.price}
                                    </TextTypography22>
                                    <TextTypography22 sx={{ color: theme.palette.error.main }}>
                                        {currentGame.price}
                                    </TextTypography22>
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                ) : <ButtonWitoutDiscount price={currentGame?.price} />
            }

        </Grid>
    )
};

export default DetailsSide;