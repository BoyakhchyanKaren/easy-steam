import React from "react";
import { IconButton, Grid, CardMedia, Card } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { TextTypography16 } from "@components/common/ui-elements";
import { useDrawerStyles } from "@components/Drawer/styles";
import RemoveCard from "assets/icons/RemoveCard/RemoveCard";

const DrawerCard = () => {
    const classes = useDrawerStyles();
    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={'https://picsum.photos/100/100'} />
            <Grid>
                <TextTypography16>The Witcher® 3  WILD HUNT</TextTypography16>
                <Grid container direction={"row"} justifyContent={"center"} gap={2}>
                    <TextTypography16 sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>$ 19.09</TextTypography16>
                    <TextTypography16 sx={{ fontWeight: 'bold' }}>$ 19.09</TextTypography16>
                </Grid>
                <Grid pt={paddings.top4} container justifyContent={"flex-end"}>
                    <IconButton disableRipple size="small">
                        <RemoveCard />
                    </IconButton>
                </Grid>
            </Grid>
        </Card>
    )
}

export default DrawerCard;