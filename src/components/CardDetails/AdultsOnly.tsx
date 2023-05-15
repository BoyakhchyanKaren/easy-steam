import React from "react";
import { TextTypography16, TextTypography22 } from "@components/common/ui-elements";
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";

const AdultsOnly = () => {
    const currentGame = useAppSelector(gameSelector.currentGame);

    return (
        <>
            <TextTypography22>ОПИСАНИЕ КОНТЕНТА ДЛЯ ВЗРОСЛЫХ</TextTypography22>
            <TextTypography16 sx={{ lineHeight: 2 }}>
                {currentGame?.description}
            </TextTypography16>
        </>
    )
};

export default AdultsOnly;