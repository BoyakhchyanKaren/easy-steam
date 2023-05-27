import { MasterCardIcon, QIWICardIcon, SberBankIcon, YMoneyIcon } from "assets/icons/Payment/PaymentIcons";
import PaymentCards from "./PaymentCards";
import EmptyPaymentContent from "./EmptyPaymentContent";
import { useState } from "react";
import { Checkbox } from "@mui/material";
import { paymentMethods } from "./constants";



const PaymentContent = () => {
    const [selectedMethod, setSelectedMethod] = useState<null | string>(null);

    const handleMethodChange = (methodId: string) => {
        setSelectedMethod(methodId);
    };

    return (
        <>
            {paymentMethods.map((paymentMethod) => {
                return (
                    <PaymentCards key={paymentMethod.id} selectedMethod={selectedMethod} methodTitle={paymentMethod.methodTitle} onChange={() => handleMethodChange(paymentMethod.methodTitle)}>
                        {<paymentMethod.icon />}
                    </PaymentCards>
                )
            })}
            <EmptyPaymentContent />
        </>
    )
}

export default PaymentContent