import { CustomCheckbox, TextTypography18 } from "@components/common/ui-elements";
import { Card, Box } from "@mui/material";
import { gaps } from "constants/themeConstants";
import { usePaymentPageStyles } from "./styles";

interface PaymentCardsProps {
    children: React.ReactNode;
    methodTitle: string;
}

const PaymentCards = ({ children, methodTitle }: PaymentCardsProps) => {
    const classes = usePaymentPageStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <Box display={"flex"} flexDirection={"row"} gap={gaps.gap24} alignItems={"center"}>
                {children}
                <TextTypography18>{methodTitle}</TextTypography18>
            </Box>
            <CustomCheckbox />
        </Card>
    )
};

export default PaymentCards;