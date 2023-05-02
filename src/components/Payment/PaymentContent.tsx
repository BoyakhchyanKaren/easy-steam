import { MasterCardIcon, QIWICardIcon, SberBankIcon, YMoneyIcon } from "assets/icons/Payment/PaymentIcons";
import PaymentCards from "./PaymentCards";
import CircularLoading from "@components/Loading";

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
            <PaymentCards methodTitle="Сбербанк">
                <SberBankIcon />
            </PaymentCards>
            <PaymentCards methodTitle="Сбербанк">
                <CircularLoading />
            </PaymentCards>
        </>
    )
}

export default PaymentContent