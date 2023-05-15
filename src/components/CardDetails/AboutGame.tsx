import React from "react";
import { TextTypography22, TextTypography16 } from "@components/common/ui-elements";
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";
const AboutGame = () => {
    const currentGame = useAppSelector(gameSelector.currentGame);
    return (
        <>
            <TextTypography22>ОБ ЭТОЙ ИГРЕ</TextTypography22>
            <TextTypography16 sx={{ lineHeight: 2 }}>
                {currentGame?.description}
            </TextTypography16>
        </>
    )
};

export default AboutGame;