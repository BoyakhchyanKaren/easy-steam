import { EmptyLoadingState, TextTypography18 } from "@components/common/ui-elements";
import { usePaymentPageStyles } from "./styles";
import { Card, Box } from "@mui/material";
import { gaps } from "constants/themeConstants";

const EmptyPaymentContent = () => {
    const classes = usePaymentPageStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <Box display={"flex"} flexDirection={"row"} gap={gaps.gap24} alignItems={"center"}>
                <EmptyLoadingState />
                <TextTypography18 sx={{ fontWeight: 500, color: (theme) => theme.palette.primary.contrastText }}>{'В Настоящее Время Недоступен'}</TextTypography18>
            </Box>
        </Card>
    );
};

export default EmptyPaymentContent;