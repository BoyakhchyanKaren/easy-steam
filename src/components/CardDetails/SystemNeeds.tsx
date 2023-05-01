import { TextTypography16, TextTypography18, TextTypography22 } from "@components/common/ui-elements"
import { Grid, useTheme } from "@mui/material"
import { margins } from "constants/themeConstants";

const systemData = {
    minimal: [
        { subTitle1: 'ОС', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Процессор', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Оперативная память', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Видеокарта', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'DirectX', subTitle2: 'Оперативная память: 16 GB ОЗУ Видеокарта' },
        { subTitle1: 'Сеть', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Место на диске', subTitle2: '64-bit Windows 10' },
    ],
    suggested: [
        { subTitle1: 'ОС', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Процессор', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Оперативная память', subTitle2: 'Оперативная память: 16 GB ОЗУ Видеокарта' },
        { subTitle1: 'Видеокарта', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'DirectX', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Сеть', subTitle2: '64-bit Windows 10' },
        { subTitle1: 'Место на диске', subTitle2: '64-bit Windows 10' },
    ],
}

interface SystemDataProps {
    subTitle1: string;
    subTitle2: string;
}

interface SystemProps {
    title: string;
    systemName: string;
    systemInfo: SystemDataProps[];
}


const SystemLine = ({ subTitle1, subTitle2 }: { subTitle1: string, subTitle2: string }) => {
    const theme = useTheme();
    return (
        <Grid container direction={"row"} gap={1}>
            <TextTypography16 sx={{ color: theme.palette.primary.contrastText }}>{`${subTitle1}:`}</TextTypography16>
            <TextTypography16>{subTitle2}</TextTypography16>
        </Grid>
    )
}


const System = ({ title, systemName, systemInfo }: SystemProps) => {
    return (
        <Grid item>
            <TextTypography18 sx={{ marginBottom: margins.bottom8, fontWeight: 500 }}>{`${title}:`}</TextTypography18>
            <Grid container direction={"column"} gap={1}>
                <TextTypography16>{systemName}</TextTypography16>
                {systemInfo.map((info) => <SystemLine key={title} subTitle1={info.subTitle1} subTitle2={info.subTitle2} />)}
            </Grid>
        </Grid>
    )
}

const SystemNeeds = () => {
    return (
        <>
            <TextTypography22>СИСТЕМНЫЕ ТРЕБОВАНИЯ</TextTypography22>
            <Grid container direction={"row"} justifyContent={"space-between"}>
                <System title="МИНИМАЛЬНЫЕ" systemName="64-разрядные процессор и операционная система" systemInfo={systemData.minimal} />
                <System title="РЕКОМЕНДОВАННЫЕ" systemName="64-разрядные процессор и операционная система" systemInfo={systemData.suggested} />
            </Grid>
        </ >
    )
};

export default SystemNeeds;