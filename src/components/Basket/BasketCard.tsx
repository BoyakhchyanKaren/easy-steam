import { TextTypography16 } from "@components/common/ui-elements";
import { Card, CardMedia, Grid, IconButton } from "@mui/material";
import { margins, paddings } from "constants/themeConstants";
import { useBasketStyles } from "./styles";
import RemoveCard from "assets/icons/RemoveCard/RemoveCard";

const BaskterCard = () => {
    const classes = useBasketStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardMedia className={classes.media} image={'https://picsum.photos/300/300'} />
            <Grid pr={paddings.leftRight64}>
                <TextTypography16>The Witcher® 3  WILD HUNT 3  WILD HUNT</TextTypography16>
                <Grid container direction={"row"} justifyContent={"center"} gap={2} pt={paddings.top24}>
                    <TextTypography16 sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>$ 19.09</TextTypography16>
                    <TextTypography16 sx={{ fontWeight: 'bold' }}>$ 19.09</TextTypography16>
                    <Grid container justifyContent={"flex-end"} marginTop={margins.top24}>
                        <IconButton disableRipple size="small">
                            <RemoveCard />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    )
};

export default BaskterCard;