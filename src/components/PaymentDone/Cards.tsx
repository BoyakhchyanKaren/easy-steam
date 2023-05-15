import { TextTypography16 } from "@components/common/ui-elements";
import { Card, CardMedia, Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { useBasketStyles } from "@components/Basket/styles";
import { GamesCardProps } from "types/reduxTypes";

interface PaymentBuyCard {
    currentGame: GamesCardProps;
}

const PaymentBuyCard = ({ currentGame }: PaymentBuyCard) => {
    const classes = useBasketStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={currentGame.image} />
            <Grid pr={paddings.leftRight64}>
                <TextTypography16>{currentGame.title}</TextTypography16>
                <Grid container direction={"row"} justifyContent={"center"} gap={2} pt={paddings.top24}>
                    <TextTypography16 sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                    <TextTypography16 sx={{ fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                </Grid>
            </Grid>
        </Card>
    )
};

export default PaymentBuyCard;