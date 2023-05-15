import { TextTypography16, TextTypography18, TextTypography22 } from "@components/common/ui-elements"
import { Grid, useTheme } from "@mui/material"
import { useAppSelector } from "@redux/hooks";
import { gameSelector } from "@redux/slices/games";
import { margins } from "constants/themeConstants";
import { SystemDataProps } from "types/reduxTypes";

interface SystemProps {
    title: string;
    systemName?: string;
    systemInfo?: SystemDataProps[];
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
                {systemInfo?.map((info) => <SystemLine key={title} subTitle1={info.subTitle1} subTitle2={info.subTitle2} />)}
            </Grid>
        </Grid>
    )
}

const SystemNeeds = () => {
    const currentGame = useAppSelector(gameSelector.currentGame);
    return (
        <>
            <TextTypography22>СИСТЕМНЫЕ ТРЕБОВАНИЯ</TextTypography22>
            <Grid container direction={"row"} justifyContent={"space-between"}>
                <System title="МИНИМАЛЬНЫЕ" systemName={currentGame?.systemName} systemInfo={currentGame?.minimal} />
                <System title="РЕКОМЕНДОВАННЫЕ" systemName={currentGame?.systemName} systemInfo={currentGame?.suggested} />
            </Grid>
        </ >
    )
};

export default SystemNeeds;