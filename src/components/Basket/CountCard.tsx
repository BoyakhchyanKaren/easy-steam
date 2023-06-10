import { Card, Grid } from "@mui/material";
import { useBasketStyles } from "./styles";
import { SecondaryLigtButton, TextTypography18 } from "@components/common/ui-elements";
import { useRouter } from "next/router";
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";

const CountCard = ({ title }: { title: string }) => {
    const classes = useBasketStyles();
    const { push } = useRouter();
    const currentGames = useAppSelector(gameSelector.currentGames);
    const onPaymentClick = () => {
        push('/payment-success');
    }

    return (
        <Card classes={{ root: classes.basketRootCard }}>
            <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <TextTypography18>Общая Сумма</TextTypography18>
                <TextTypography18>₽ 16</TextTypography18>
            </Grid>
            <SecondaryLigtButton
                onClick={onPaymentClick}
                disabled={!currentGames.length}
            >{title}</SecondaryLigtButton>
        </Card>
    )
};

export default CountCard;