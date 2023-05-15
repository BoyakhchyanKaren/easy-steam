import React from "react";
import { Grid } from "@mui/material";
import { TextTypography18, TextTypography16, SecondaryLigtButton, PrimaryLightButton, DiscountButton, ButtonWitoutDiscount } from "@components/common/ui-elements";
import { margins, paddings } from "constants/themeConstants";
import { useRouter } from "next/router";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware, gameSelector } from "@redux/slices/games";
import { GamesCardProps } from "types/reduxTypes";

const DetailsSide = () => {
    const { push } = useRouter();
    const currentGame = useAppSelector(gameSelector.currentGame);
    const onBasketPageClick = () => {
        dispatch(gameMiddleware.setCurrentGames(currentGame as GamesCardProps));
        push('/basket');
    };

    const onPaymentPageClick = () => {
        push('/payment');
    }

    return (
        <Grid item xs={3} container direction={"column"} alignItems={"flex-start"} gap={4} ml={margins.left60} mt={margins.top16}>
            <TextTypography18>{currentGame?.title}</TextTypography18>
            <TextTypography16>
                {currentGame?.description}
            </TextTypography16>
            <TextTypography16>
                {`ДАТА ВЫХОДА: ${currentGame?.dateOfCreation}`}
            </TextTypography16>
            <SecondaryLigtButton fullWidth onClick={onPaymentPageClick}>Купить Сейчас!</SecondaryLigtButton>
            <PrimaryLightButton fullWidth onClick={onBasketPageClick}>В Корзину</PrimaryLightButton>
            {
                currentGame?.hasDiscount ? (
                    <DiscountButton px={paddings.leftRight74} py={paddings.all6} price={currentGame?.price} />
                ) : <ButtonWitoutDiscount price={currentGame?.price} />
            }

        </Grid>
    )
};

export default DetailsSide;