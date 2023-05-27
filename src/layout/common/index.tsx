import { Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"

export const useMainLayoutStyles = makeStyles((theme: Theme) => ({
    boxContainer: {
        width: '100%',
        padding: theme.spacing(5, 5),
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(5, 12),
        }
    },
    links: {
        color: theme.palette.common.white,
        fontSize: theme.typography.pxToRem(18),
        textDecoration: 'none',
        "&:hover": {
            textDecoration: 'underline'
        }
    }
}));    