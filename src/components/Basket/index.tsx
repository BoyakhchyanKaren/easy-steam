import { CustomDivider, TextTypography22 } from "@components/common/ui-elements";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import BaskterCard from "./BasketCard";
import CountCard from "./CountCard";

const BasketList = () => {
    return (
        <Grid container direction={"column"} alignItems={"center"} pt={paddings.top24} pb={paddings.bottom64}>
            <Grid container direction={"row"} item xs={12} gap={4}>
                <Grid item xs={7}>
                    <TextTypography22>Корзина</TextTypography22>
                    <CustomDivider sx={{ marginTop: 1 }} />
                </Grid>
                <Grid item container direction={"row"} xs={12} spacing={5}>
                    <Grid item container direction={"column"} gap={3} xs={7}>
                        <BaskterCard />
                        <BaskterCard />
                        <BaskterCard />
                        <BaskterCard />
                    </Grid>
                    <Grid item xs={4}>
                        <CountCard title={"Перейти К Оплате"} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BasketList;