import { CustomCheckbox, TextTypography18 } from "@components/common/ui-elements";
import { Card, Box } from "@mui/material";
import { gaps } from "constants/themeConstants";
import { usePaymentPageStyles } from "./styles";
import classNames from "classnames";

interface PaymentCardsProps {
    children: React.ReactNode;
    methodTitle: string;
    onChange: (methodId: string) => void;
    selectedMethod: string | null;
}

const PaymentCards = ({ children, methodTitle, onChange, selectedMethod }: PaymentCardsProps) => {
    const isChecked = selectedMethod === methodTitle;
    const classes = usePaymentPageStyles();

    return (
        <Card elevation={0} onClick={() => onChange(methodTitle)} className={classNames({
            [classes.root]: true,
            [classes.isSelected]: isChecked,
        })}>
            <Box display={"flex"} flexDirection={"row"} gap={gaps.gap24} alignItems={"center"}>
                {children}
                <TextTypography18>{methodTitle}</TextTypography18>
            </Box>
            <CustomCheckbox checked={isChecked} />
        </Card>
    )
};

export default PaymentCards;