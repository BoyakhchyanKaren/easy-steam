import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { paddings, borderRadius, carouselWidth, margins } from "constants/themeConstants";

export const useCarouselMainStyles = makeStyles((theme: Theme) => ({
    root: {
        height: 420,
        width: carouselWidth,
        margin: 'auto',
        padding: paddings.all12,
        backgroundColor: theme.palette.primary.main,
        borderRadius: borderRadius.radius10,
        [theme.breakpoints.between('md', 'lg')]: {
            width: 800,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: 950
        },
        [theme.breakpoints.between('xl', 1800)]: {
            width: 1100
        }
    },
    bestItemRoot: {
        width: 410,
        margin: '0 auto',
        padding: paddings.all16,
        backgroundColor: theme.palette.primary.main,
        borderRadius: borderRadius.radius10,
        [theme.breakpoints.between('md', 'lg')]: {
            width: 260,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: 310,
        },
        [theme.breakpoints.between('xl', 1800)]: {
            width: 330
        },
        [theme.breakpoints.between(1800, 1900)]: {
            width: 460
        }
    },
    bestItemMedia: {
        height: 250,
        width: '100%',
        marginBottom: margins.bottom8,
        borderRadius: borderRadius.radius10,
    },
    media: {
        height: 370,
        borderRadius: borderRadius.radius10,
        width: '50%',
        position: 'relative',
        boxShadow: `1px 0px 10px ${theme.palette.primary.main}`,
    },
    smallMediaRoot: {
        heigh: '100%',
        width: '50%',
    },
    smallMedia: {
        borderRadius: borderRadius.radius10,
        height: 130,
        width: '50%',
    },

    arrowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'absolute',
        bottom: 30,
        zIndex: 2,
    },
    leftArrow: {
        left: 0,
        transform: 'translateX(-50%)',
    },
    rightArrow: {
        right: 0,
        transform: 'translateX(50%)',
    },
}));

export const mainCarouselResponsive = {
    0: { items: 1 },
    600: { items: 1 },
    960: { items: 1 },
};

export const bestItemCarouselResponsive = {
    0: { items: 3 },
    600: { items: 3 },
    960: { items: 3 },
};
