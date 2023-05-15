import { Card, Grid } from "@mui/material";
import { useBasketStyles } from "./styles";
import { SecondaryLigtButton, TextTypography18 } from "@components/common/ui-elements";
import { useRouter } from "next/router";

const CountCard = ({ title }: { title: string }) => {
    const classes = useBasketStyles();
    const { push } = useRouter();
    const onPaymentClick = () => {
        push('/payment-success');
    }

    return (
        <Card classes={{ root: classes.basketRootCard }}>
            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <TextTypography18>Общая Сумма</TextTypography18>
                <TextTypography18>$ 16</TextTypography18>
            </Grid>
            <SecondaryLigtButton onClick={onPaymentClick}>{title}</SecondaryLigtButton>
        </Card>
    )
};

export default CountCard;