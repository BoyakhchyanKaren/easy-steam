import { TextTypography18 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { PaymentDoneIcon } from "assets/icons/Payment/PaymentIcons";
import { paddings } from "constants/themeConstants";
import PaymentBuyCard from "./Cards";
import PaymentBanner from "./PaymentBanner";
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";

const PaymentPageDone = () => {
    const currentGames = useAppSelector(gameSelector.currentGames);

    return (
        <Grid container xs={12} alignItems={"center"} justifyContent={"center"} direction={"column"} py={paddings.topBottom64} gap={4}>
            <PaymentDoneIcon />
            <TextTypography18>Оплата прошла успешно</TextTypography18>
            <Grid item container direction={"row"} xs={12} spacing={5}>
                <Grid item container direction={"column"} gap={3} xs={7}>
                    {
                        currentGames.map((currentGame) => <PaymentBuyCard currentGame={currentGame} key={currentGame.id} />)
                    }
                </Grid>
                <Grid item xs={4}>
                    <PaymentBanner title="Перейти на Главную" />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default PaymentPageDone;