import React, { SetStateAction } from "react";
import { Grid } from "@mui/material";
import { PrimaryLightButton, SecondaryLigtButton, TextTypography16 } from "@components/common/ui-elements";
import DrawerCard from "./DrawerCard";

interface DrawerListContentProps {
    setIsProcessLoading: React.Dispatch<SetStateAction<boolean>>;
}

const DrawerListContent = ({ setIsProcessLoading }: DrawerListContentProps) => {
    return (
        <>
            <Grid container direction={"column"} gap={2}>
                <DrawerCard />
                <DrawerCard />
                <DrawerCard />
            </Grid>
            <Grid container direction={"row"} justifyContent={"space-between"}>
                <TextTypography16>Сумма к оплате</TextTypography16>
                <TextTypography16 sx={{ fontWeight: 'bold' }}>$ 15</TextTypography16>
            </Grid>
            <SecondaryLigtButton onClick={() => setIsProcessLoading(true)}>ОФОРМИТЬ ЗАКАЗ</SecondaryLigtButton>
            <PrimaryLightButton>Перейти в Корзину</PrimaryLightButton>
        </>
    )
};

export default DrawerListContent;