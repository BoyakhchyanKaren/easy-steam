import ConditionsDetails from "@components/Conditions";
import { dispatch } from "@redux/hooks";
import { infoMiddleware } from "@redux/slices/info";
import { useEffect } from "react";

const Conditions = () => {
    useEffect(() => {
        dispatch(infoMiddleware.getTermsAndConditions());
    }, []);

    return (
        <ConditionsDetails />
    )
};

export default Conditions;