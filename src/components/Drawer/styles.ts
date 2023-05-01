import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { paddings, borderRadius, carouselWidth, margins } from "constants/themeConstants";

export const useDrawerStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 110,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: paddings.all6,
        borderTopLeftRadius: borderRadius.radius1,
        borderBottomRightRadius: borderRadius.radius1,
        borderTopRightRadius: borderRadius.radius12,
        borderBottomLeftRadius: borderRadius.radius12,
        backgroundColor: theme.palette.primary.light
    },
    media: {
        height: 100,
        width: 130,
        borderTopRightRadius: borderRadius.radius12,
        borderBottomLeftRadius: borderRadius.radius12,
    }
}));
