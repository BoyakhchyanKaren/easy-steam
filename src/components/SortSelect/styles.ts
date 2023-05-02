import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius } from "constants/themeConstants";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

export const getStyles = (name: string, menuItemValue: string, theme: Theme) => {
    return {
        fontWeight:
            menuItemValue.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const useStyles = makeStyles((theme: Theme) => ({
    select: {
        '& .MuiSvgIcon-root': {
            color: theme.palette.common.white
        }
    },
    input: {
        backgroundColor: theme.palette.primary.light,
        borderRadius: borderRadius.radius10,
        color: theme.palette.common.white,
    },
    paper: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        borderRadius: borderRadius.radius12,
        "& .MuiMenuItem-root:hover": {
            backgroundColor: theme.palette.secondary.main,
        },
    }
}));

export const sortItems = [
    'Алфавитный',
    'Снижение цены',
    'Увеличение цены',
];