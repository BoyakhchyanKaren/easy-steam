import React, { useState } from "react";
import { Grid } from "@mui/material";
import { paddings } from "constants/themeConstants";
import { TextTypography16 } from "@components/common/ui-elements";
import DrawerListContent from "./DrawerListContent";
import DrawerLoader from "./DrawerLoader";

const DrawerList = () => {
    const [isProcessLoading, setIsProcessLoading] = useState(false);
    return (
        <Grid
            px={paddings.leftRight16}
            py={paddings.topBottom20}
            sx={{
                width: 400,
            }}
            container
            direction={"column"}
            gap={2}
        >
            <Grid>
                <TextTypography16 sx={{ fontWeight: 600 }}>Моя Карзина</TextTypography16>
            </Grid>
            {
                isProcessLoading ? (
                    <DrawerLoader setIsProcessLoading={setIsProcessLoading} />
                ) : <DrawerListContent setIsProcessLoading={setIsProcessLoading} />
            }
        </Grid>
    )
};


export default DrawerList;