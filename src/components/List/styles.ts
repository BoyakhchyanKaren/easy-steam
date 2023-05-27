import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { carouselWidth } from "constants/themeConstants";

export const useListStyles = makeStyles((theme: Theme) => ({
    itemContainer: {
        width: carouselWidth,
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