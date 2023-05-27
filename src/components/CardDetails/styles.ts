import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "constants/themeConstants";

export const useDetailsCarouselStyles = makeStyles((theme: Theme) => ({
    root: {
        width: 930,
        height: 520,
        margin: 'auto',
        backgroundColor: 'transparent',
        borderRadius: borderRadius.radius12,
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.between('md', 'lg')]: {
            width: 550,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: 650,
        },
    },
    discountContainer: {
        marginLeft: '-20px',
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: '-5px'
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            marginLeft: '-8px'
        }
    },
    media: {
        height: 300,
        borderRadius: borderRadius.radius12,
        position: 'relative',
    },
    smallMediaRoot: {
        heigh: '100%',
    },
    smallMedia: {
        borderRadius: borderRadius.radius12,
        height: 170,
    },
    arrowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        position: 'absolute',
        bottom: 50,
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
    discountButton: {
        backgroundColor: theme.palette.error.main,
        borderTopLeftRadius: borderRadius.radius12,
        color: theme.palette.common.white,
        borderBottomLeftRadius: borderRadius.radius12,
        padding: theme.spacing(1.5, 0)
    },
    pricesButton: {
        backgroundColor: theme.palette.common.white,
        borderRadius: borderRadius.radius12,
        color: theme.palette.common.white,
        padding: theme.spacing(1.5, 0),
        display: 'flex',
        gap: 2
    }
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
