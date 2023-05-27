import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { borderRadius, carouselWidth, itemsCarouselWidth } from "constants/themeConstants";

export const filterResponsiveItems = {
    0: { items: 2 },
    600: { items: 2 },
    970: { items: 2.2 },
};


export const useFilterStyles = makeStyles((theme: Theme) => ({
    selected: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: borderRadius.radius10,
    },
    input: {
        border: "none",
        outline: "none",
    },
    text: {
        color: theme.palette.common.white
    },
    responsiveHeader: {
        width: carouselWidth,
        margin: 'auto',
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
    responsiveItems: {
        width: itemsCarouselWidth,
        margin: 'auto',
        [theme.breakpoints.between('md', 'lg')]: {
            width: 860,
        },
        [theme.breakpoints.between('lg', 'xl')]: {
            width: 1000
        },
        [theme.breakpoints.between('xl', 1800)]: {
            width: 1200
        }
    },
    filterButton: {
        textTransform: 'none',
        display: 'flex',
        justifyContent: 'flex-start',
        fontSize: theme.typography.pxToRem(16),
        marginBottom: theme.spacing(1.5)
    }
}));

export const firstItems = [
    { title: 'Игры', id: 'title-1' },
    { title: 'Программы', id: 'title-2' },
    { title: 'Видео', id: 'title-3' },
    { title: 'Демо', id: 'title-4' },
    { title: 'Саундтреки', id: 'title-5' },
    { title: 'Модификация', id: 'title-6' },
];

export const secondItems = [
    { title: 'Тестирование', id: 'title-7' },
    { title: 'Дополнительные', id: 'title-8' },
    { title: 'Модификация1', id: 'title-9' },
    { title: 'Устройство', id: 'title-10' },
    { title: 'Наборы', id: 'title-11' },
];

export const thirdItems = [
    { title: 'Демо1', id: 'title-12' },
    { title: 'Дополнительные', id: 'title-13' },
    { title: 'Игры1', id: 'title-14' },
    { title: 'Саундтреки1', id: 'title-15' },
    { title: 'Видео1', id: 'title-16' },
];