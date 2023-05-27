import { CustomDivider, TextTypography16, TextTypography22 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { useAppSelector } from "@redux/hooks";
import { infoSelector } from "@redux/slices/info";
import { paddings } from "constants/themeConstants";
import FAQItem from "./FAQItem";

const FAQBanner = () => {
    const conditions = useAppSelector(infoSelector.conditions);

    return (
        <Grid container direction={"column"} alignItems={"center"} pt={paddings.top48} pb={paddings.bottom64}>
            <Grid container direction={"row"} item xs={12} gap={4}>
                <Grid item xs={7}>
                    <TextTypography22>Вопросы и ответы (FAQ page)</TextTypography22>
                    <CustomDivider sx={{ marginTop: 1 }} />
                </Grid>
                <Grid container direction={"column"} gap={3}>
                    <FAQItem question="Откуда он появился?" answer={conditions.whereToFind} />
                    <FAQItem question="Где его взять?" answer={conditions.whereToTake} />
                    <FAQItem question="Где его взять?" answer={conditions.howToTake} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default FAQBanner;