import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { borderRadius } from "constants/themeConstants";

export const filterResponsiveItems = {
    0: { items: 2 },
    600: { items: 2 },
    960: { items: 2 },
};


export const useFilterStyles = makeStyles((theme: Theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(0)
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: 0
        },
        width: '250px',
    },
    selected: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderRadius: borderRadius.radius10,
    },
    input: {
        border: "none",
        outline: "none",
    },
    container: {
        display: "flex",
        justifyContent: "space-betweem"
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
    { title: 'Дополнительные Контенты', id: 'title-8' },
    { title: 'Модификация', id: 'title-9' },
    { title: 'Устройство', id: 'title-10' },
    { title: 'Наборы', id: 'title-11' },
];

export const thirdItems = [
    { title: 'Демо', id: 'title-12' },
    { title: 'Дополнительные', id: 'title-13' },
    { title: 'Игры', id: 'title-14' },
    { title: 'Саундтреки', id: 'title-15' },
    { title: 'Видео', id: 'title-16' },
];