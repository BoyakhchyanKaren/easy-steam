import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { borderRadius, paddings } from "constants/themeConstants";

export const usePaymentPageStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        height: 180,
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
    }
}));
