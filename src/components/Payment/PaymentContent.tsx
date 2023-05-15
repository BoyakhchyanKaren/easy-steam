import { MasterCardIcon, QIWICardIcon, SberBankIcon, YMoneyIcon } from "assets/icons/Payment/PaymentIcons";
import PaymentCards from "./PaymentCards";
import EmptyPaymentContent from "./EmptyPaymentContent";

const PaymentContent = () => {
    return (
        <>
            <PaymentCards methodTitle="МИР">
                <MasterCardIcon />
            </PaymentCards>
            <PaymentCards methodTitle="QIWI">
                <QIWICardIcon />
            </PaymentCards>
            <PaymentCards methodTitle="ЮMoney">
                <YMoneyIcon />
            </PaymentCards>
            <EmptyPaymentContent />
        </>
    )
}

export default PaymentContent