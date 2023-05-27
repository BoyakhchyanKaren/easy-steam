import React, { ChangeEvent, useEffect } from "react";
import { Grid } from "@mui/material";
import { TextTypography18, CustomDivider, CustomCheckbox, TextTypography16 } from "@components/common/ui-elements";
import { useRouter } from "next/router";
import FilterInputs from "./FilterInputs";
import { dispatch, useAppSelector } from "@redux/hooks";
import { infoMiddleware, infoSelector } from "@redux/slices/info";

const FilterContent = () => {
    const router = useRouter();
    const hasDiscount = useAppSelector(infoSelector.hasDiscount);

    useEffect(() => {
        const { discount, ...otherQueries } = router.query;
        const url = {
            pathname: router.pathname,
            query: {
                ...otherQueries,
                ...(hasDiscount ? { discount: hasDiscount } : {}),
            }
        };

        router.push(url, undefined, { shallow: true });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [hasDiscount]);

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(infoMiddleware.setHasDiscount(e.target.checked));
    }

    return (
        <Grid item>
            <Grid container direction={"column"}>
                <TextTypography18>Цена</TextTypography18>
                <Grid item py={1}>
                    <CustomDivider />
                </Grid>
                <Grid item py={3}>
                    <FilterInputs />
                </Grid>
                <Grid item container direction={"row"} alignItems={"center"}>
                    <TextTypography16>Скидки</TextTypography16>
                    <CustomCheckbox fontSize={30} value={hasDiscount} onChange={onCheckboxChange} checked={hasDiscount} />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default FilterContent;