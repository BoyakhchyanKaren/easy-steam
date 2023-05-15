import { CustomDivider, TextTypography16, TextTypography22 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { useAppSelector } from "@redux/hooks";
import { infoSelector } from "@redux/slices/info";
import { paddings } from "constants/themeConstants";
import ConditionsItem from "./ConditionsItem";

const ConditionsDetails = () => {
    const conditions = useAppSelector(infoSelector.conditions);

    return (
        <Grid container direction={"column"} alignItems={"center"} pt={paddings.top48} pb={paddings.bottom64}>
            <Grid container direction={"row"} item xs={12} gap={4}>
                <Grid item xs={7}>
                    <TextTypography22>Политика Конфиденциальности</TextTypography22>
                    <CustomDivider sx={{ marginTop: 1 }} />
                </Grid>
                <Grid container direction={"column"} gap={3}>
                    <ConditionsItem question="Откуда он появился?" answer={conditions.whereToFind} />
                    <ConditionsItem question="Где его взять?" answer={conditions.whereToTake} />
                    <ConditionsItem question="Где его взять?" answer={conditions.howToTake} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default ConditionsDetails;