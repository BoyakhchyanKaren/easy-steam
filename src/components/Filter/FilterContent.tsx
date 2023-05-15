import React, { useCallback, useState } from "react";
import { Button, Grid, useTheme } from "@mui/material";
import { borderRadius, paddings } from "constants/themeConstants";
import { TextTypography18, CustomDivider, FilterButtonNextButton, PrimaryTextField, CustomCheckbox, TextTypography16 } from "@components/common/ui-elements";
import { CarouselArrowRigth } from "assets/icons/CarouselArrow/CarouselArrow";
import { useRouter } from "next/router";

const FilterContent = () => {
    const theme = useTheme();
    const router = useRouter();
    const [hasDiscount, setHasDiscount] = useState(false);

    const onDiscountCheckboxClick = useCallback(() => {
        setHasDiscount(!hasDiscount);
        router.push({
            query: {
                ...router.query,
                ...(!hasDiscount ? { discount: true } : {}),
            }
        },
            undefined,
            { shallow: true }
        )
    }, [hasDiscount]);

    return (
        <Grid item width={350}>
            <Grid container direction={"column"}>
                <TextTypography18>Цена</TextTypography18>
                <Grid item py={1}>
                    <CustomDivider />
                </Grid>
                <Grid item py={3}>
                    <Grid container direction={"row"} alignItems={"center"} gap={paddings.all4}>
                        <PrimaryTextField autoComplete="off" placeholder={"Мин"} />
                        <span style={{
                            padding: `${paddings.topBottom2} ${paddings.leftRight16}`,
                            backgroundColor: theme.palette.primary.light,
                            borderRadius: borderRadius.radius4
                        }}>{' '}</span>
                        <PrimaryTextField autoComplete="off" placeholder={"Макс"} />
                        <FilterButtonNextButton variant="contained">
                            <CarouselArrowRigth />
                        </FilterButtonNextButton>
                    </Grid>
                </Grid>
                <Grid item container direction={"row"} alignItems={"center"}>
                    <TextTypography16>Скидки</TextTypography16>
                    <Button disableRipple disableTouchRipple onClick={() => onDiscountCheckboxClick()}>
                        <CustomCheckbox fontSize={30} />
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default FilterContent;