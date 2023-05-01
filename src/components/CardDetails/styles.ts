import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { paddings, borderRadius, carouselWidth, margins } from "constants/themeConstants";

export const useDetailsCarouselStyles = makeStyles((theme: Theme) => ({
    root: {
        width: 930,
        height: 520,
        margin: 'auto',
        backgroundColor: 'transparent',
        borderRadius: borderRadius.radius12,
        display: 'flex',
        justifyContent: 'space-between',
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
