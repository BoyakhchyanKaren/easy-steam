import { Card, Grid } from "@mui/material";
import { PrimaryLightButton, SecondaryLigtButton, TextTypography18 } from "@components/common/ui-elements";
import { useBasketStyles } from "@components/Basket/styles";
import { paddings } from "constants/themeConstants";

const PaymentBanner = ({ title }: { title: string }) => {
    const classes = useBasketStyles();

    return (
        <Card classes={{ root: classes.paymentRootCard }}>
            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <TextTypography18>Общая Сумма</TextTypography18>
                <TextTypography18>$ 16</TextTypography18>
            </Grid>
            <SecondaryLigtButton>{title}</SecondaryLigtButton>
            <PrimaryLightButton>{'Скачать Инвойс'}</PrimaryLightButton>
        </Card>
    )
};

export default PaymentBanner;