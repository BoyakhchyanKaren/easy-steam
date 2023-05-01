import React from "react";
import { TextTypography16, TextTypography22 } from "@components/common/ui-elements";

const AdultsOnly = () => {
    return (
        <>
            <TextTypography22>ОБ ЭТОЙ ИГРЕ</TextTypography22>
            <TextTypography16 sx={{ lineHeight: 2 }}>
                ОПИСАНИЕ КОНТЕНТА ДЛЯ ВЗРОСЛЫХ <br />
                Разработчики описывают контент так:<br />
                Эта игра может содержать контент, не подходящий для всех возрастов или для просмотра на работе: Сцены насилия или жестокости, Контент для взрослых
            </TextTypography16>
        </>
    )
};

export default AdultsOnly;