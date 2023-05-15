import React, { SetStateAction } from "react";
import { Grid } from "@mui/material";
import { PrimaryLightButton, SecondaryLigtButton, TextTypography16 } from "@components/common/ui-elements";
import DrawerCard from "./DrawerCard";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware, gameSelector } from "@redux/slices/games";
import { margins } from "constants/themeConstants";
import { EmptyBasketIcon } from "assets/icons/BasketIcon/BasketIcon";
import { useRouter } from "next/router";

interface DrawerListContentProps {
    setIsProcessLoading: React.Dispatch<SetStateAction<boolean>>;
}

const DrawerListContent = ({ setIsProcessLoading }: DrawerListContentProps) => {
    const { push } = useRouter();
    const currentGames = useAppSelector(gameSelector.currentGames);
    const isBasketEmpty = !currentGames.length;
    const onOrderClick = () => {
        setIsProcessLoading(true);
        dispatch(gameMiddleware.setIsDrawerOpen(false));
        push('/payment');
    }

    return (
        <>
            <Grid container direction={"column"} gap={2}>
                {
                    currentGames.map((currentGame) => {
                        return <DrawerCard key={currentGame.id} currentGame={currentGame} />
                    })
                }
            </Grid>
            {
                isBasketEmpty ? (
                    <>
                        <Grid container direction={"column"} gap={6} mt={margins.top24}>
                            <EmptyBasketIcon sx={{ alignSelf: 'center', width: '65px', height: '65px' }} />
                            <TextTypography16 sx={{ textAlign: 'center' }}>Корзина Пустой</TextTypography16>
                            <PrimaryLightButton onClick={() => dispatch(gameMiddleware.setIsDrawerOpen(false))}>Продолжить Покупки</PrimaryLightButton>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid container direction={"row"} justifyContent={"space-between"}>
                            <TextTypography16>Сумма к оплате</TextTypography16>
                            <TextTypography16 sx={{ fontWeight: 'bold' }}>$ 15</TextTypography16>
                        </Grid>
                        <SecondaryLigtButton onClick={onOrderClick}>ОФОРМИТЬ ЗАКАЗ</SecondaryLigtButton>
                        <PrimaryLightButton onClick={() => push('/basket')}>Перейти в Корзину</PrimaryLightButton>
                    </>
                )
            }
        </>
    )
};

export default DrawerListContent;