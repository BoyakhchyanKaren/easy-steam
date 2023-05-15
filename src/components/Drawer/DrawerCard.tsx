import React from "react";
import { IconButton, Grid, CardMedia, Card } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { TextTypography16 } from "@components/common/ui-elements";
import { useDrawerStyles } from "@components/Drawer/styles";
import RemoveCard from "assets/icons/RemoveCard/RemoveCard";
import { GamesCardProps } from "types/reduxTypes";
import { dispatch } from "@redux/hooks";
import { gameMiddleware } from "@redux/slices/games";

interface DrawerCardProps {
    currentGame: GamesCardProps;
}

const DrawerCard = ({ currentGame }: DrawerCardProps) => {

    const onDeleteCardClick = () => {
        dispatch(gameMiddleware.removeGameFromBasket(currentGame));
    };

    const classes = useDrawerStyles();
    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={currentGame.image} />
            <Grid>
                <TextTypography16>{currentGame.title}</TextTypography16>
                <Grid container direction={"row"} justifyContent={"center"} gap={2}>
                    <TextTypography16 sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                    <TextTypography16 sx={{ fontWeight: 'bold' }}>{currentGame.price}</TextTypography16>
                </Grid>
                <Grid pt={paddings.top4} container justifyContent={"flex-end"}>
                    <IconButton disableRipple size="small" onClick={onDeleteCardClick}>
                        <RemoveCard />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
}

export default DrawerCard;