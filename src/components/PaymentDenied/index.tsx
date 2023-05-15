import { TextTypography16, TextTypography18 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { PaymentDeniedIcon } from "assets/icons/Payment/PaymentIcons";
import { margins, paddings } from "constants/themeConstants";

const PaymentPageDenied = () => {
    return (
        <Grid container xs={12} alignItems={"center"} justifyContent={"center"} direction={"column"} py={paddings.topBottom64} gap={7}>
            <PaymentDeniedIcon />
            <TextTypography18>Ошибка с платежом</TextTypography18>
            <Grid xs={6} sx={{ textAlign: 'center' }} mt={margins.top24}>
                <TextTypography16>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                    a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                    a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                </TextTypography16>
            </Grid>
            <TextTypography16 mt={margins.top16} sx={{
                color: (theme) => theme.palette.secondary.main
            }}>http//.Link here.com</TextTypography16>
        </Grid>
    )
};

export default PaymentPageDenied;