import { TextTypography16, TextTypography18 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";

const ConditionsItem = ({ question, answer }: { question: string, answer: string }) => {
    return (
        <Grid container direction={"column"} gap={2}>
            <TextTypography18>
                {question}
            </TextTypography18>
            <TextTypography16>
                {answer}
            </TextTypography16>
        </Grid>
    )
};

export default ConditionsItem;