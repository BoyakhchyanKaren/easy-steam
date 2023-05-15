import { TextTypography16 } from "@components/common/ui-elements";
import { Card, CardMedia, Grid, IconButton } from "@mui/material";
import { margins, paddings } from "constants/themeConstants";
import { useBasketStyles } from "./styles";
import RemoveCard from "assets/icons/RemoveCard/RemoveCard";
import { GamesCardProps } from "types/reduxTypes";
import { dispatch } from "@redux/hooks";
import { gameMiddleware } from "@redux/slices/games";

interface BasketCardProps {
    currentGame: GamesCardProps;
}

const BaskterCard = ({ currentGame }: BasketCardProps) => {
    const classes = useBasketStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={currentGame.image} />
            <Grid pr={paddings.leftRight64}>
                <TextTypography16>{currentGame.title}</TextTypography16>
                <Grid container direction={"row"} justifyContent={"center"} gap={2} pt={paddings.top24}>
                    <TextTypography16 sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                    <TextTypography16 sx={{ fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                    <Grid container justifyContent={"flex-end"} marginTop={margins.top24}>
                        <IconButton disableRipple size="small" onClick={() => dispatch(gameMiddleware.removeGameFromBasket(currentGame))}>
                            <RemoveCard />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
};

export default BaskterCard;