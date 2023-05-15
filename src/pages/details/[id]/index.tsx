import Details from "@components/CardDetails";
import { dispatch } from "@redux/hooks";
import { gameMiddleware } from "@redux/slices/games";
import { useEffect } from "react";

const CardDetails = () => {

    useEffect(() => {
        dispatch(gameMiddleware.getGames());
    }, []);

    return (
        <Details />
    )
};


export default CardDetails;