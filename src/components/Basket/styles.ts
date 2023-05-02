import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius, gaps, paddings } from "constants/themeConstants";

export const useBasketStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: 250,
        margin: 'auto',
        backgroundColor: theme.palette.primary.main,
        padding: paddings.all12,
        borderRadius: borderRadius.radius12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    media: {
        height: '100%',
        width: '50%',
        borderRadius: borderRadius.radius12,
    },
    basketRootCard: {
        height: 200,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: borderRadius.radius12,
        padding: paddings.all32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: gaps.gap24
    },
    paymentRootCard: {
        height: 250,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: borderRadius.radius12,
        padding: paddings.all32,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: gaps.gap24
    },
}));
