import React from "react";
import { Grid } from "@mui/material";
import { TextTypography18, TextTypography16, SecondaryLigtButton, PrimaryLightButton, DiscountButton } from "@components/common/ui-elements";
import { margins, paddings } from "constants/themeConstants";

const DetailsSide = () => {
    return (
        <Grid item xs={3} container direction={"column"} alignItems={"flex-start"} gap={4} ml={margins.left60} mt={margins.top16}>
            <TextTypography18>PUBG: BATTLEGROUNDS</TextTypography18>
            <TextTypography16>
                Играйте В PUBG: BATTLEGROUNDS бесплатно. Высаживайтесь в стратегически важных местах,
                добывайте оружие и припасы и постарайтесь выжить и остаться последней командой на одном из многочисленных полей боя.
            </TextTypography16>
            <TextTypography16>
                ДАТА ВЫХОДА: 21 дек. 2017
            </TextTypography16>
            <SecondaryLigtButton fullWidth>Купить Сейчас!</SecondaryLigtButton>
            <PrimaryLightButton fullWidth>В Корзину</PrimaryLightButton>
            <DiscountButton px={paddings.leftRight74} py={paddings.all6} />
        </Grid>
    )
};

export default DetailsSide;