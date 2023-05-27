import TermsDetails from "@components/Terms";
import { dispatch } from "@redux/hooks";
import { infoMiddleware } from "@redux/slices/info";
import { useEffect } from "react";

const TermsAndConditions = () => {
    useEffect(() => {
        dispatch(infoMiddleware.getTermsAndConditions());
    }, []);

    return (
        <TermsDetails />
    )
};

export default TermsAndConditions;