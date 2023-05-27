import FAQBanner from "@components/FAQ";
import { dispatch } from "@redux/hooks";
import { infoMiddleware } from "@redux/slices/info";
import { useEffect } from "react";

const FAQ = () => {
    useEffect(() => {
        dispatch(infoMiddleware.getTermsAndConditions());
    }, []);

    return (
        <FAQBanner />
    )
};

export default FAQ;