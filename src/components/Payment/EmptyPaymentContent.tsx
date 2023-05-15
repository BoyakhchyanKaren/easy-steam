import { EmptyLoadingState, TextTypography18 } from "@components/common/ui-elements";
import { usePaymentPageStyles } from "./styles";
import { Card, Box, useTheme } from "@mui/material";
import { gaps } from "constants/themeConstants";
import { SberBankIcon } from "assets/icons/Payment/PaymentIcons";

const EmptyPaymentContent = () => {
    const theme = useTheme();
    const classes = usePaymentPageStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <Box display={"flex"} flexDirection={"row"} gap={gaps.gap24} alignItems={"center"}>
                <SberBankIcon sx={{
                    backgroundColor: theme.palette.primary.main,
                    opacity: 0.5
                }} />
                <TextTypography18 sx={{ fontWeight: 500, color: (theme) => theme.palette.primary.contrastText }}>{'Сбербанк'}</TextTypography18>
            </Box>
        </Card>
    );
};

export default EmptyPaymentContent;