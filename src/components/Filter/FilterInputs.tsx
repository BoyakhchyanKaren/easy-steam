import React, { useEffect, useState } from "react";
import { Grid, useTheme } from "@mui/material";
import { borderRadius, paddings } from "constants/themeConstants";
import { FilterButtonNextButton, PrimaryTextField } from "@components/common/ui-elements";
import { CarouselArrowRigth } from "assets/icons/CarouselArrow/CarouselArrow";
import { useRouter } from "next/router";
import { dispatch, useAppSelector } from "@redux/hooks";
import { infoMiddleware, infoSelector } from "@redux/slices/info";

const FilterInputs = () => {
    const theme = useTheme();
    const router = useRouter();
    const minimumPrice = useAppSelector(infoSelector.minPrice);
    const maximumPrice = useAppSelector(infoSelector.maxPrice);
    const [minPrice, setMinPrice] = useState<string | number>('');
    const [maxPrice, setMaxPrice] = useState<string | number>('');

    const onApplyPriceClick = () => {
        dispatch(infoMiddleware.setCurrentMinPrice(minPrice))
        dispatch(infoMiddleware.setCurrentMaxPrice(maxPrice))
    };

    useEffect(() => {
        const { minPrice, maxPrice, ...otherQueryParams } = router.query;
        const url = {
            pathname: router.pathname,
            query: {
                ...otherQueryParams,
                ...(minimumPrice ? { minPrice: minimumPrice } : {}),
                ...(maximumPrice ? { minPrice: maximumPrice } : {}),
            }
        };

        router.push(url, undefined, { shallow: true });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [minimumPrice, maximumPrice]);

    return (
        <Grid container direction={"row"} alignItems={"center"} gap={paddings.all4}>
            <PrimaryTextField
                autoComplete="off"
                placeholder={"Мин"}
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />
            <span style={{
                padding: `${paddings.topBottom2} ${paddings.leftRight16}`,
                backgroundColor: theme.palette.primary.light,
                borderRadius: borderRadius.radius4
            }}>{' '}</span>
            <PrimaryTextField
                autoComplete="off"
                placeholder={"Макс"}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />
            <FilterButtonNextButton variant="contained" onClick={onApplyPriceClick}>
                <CarouselArrowRigth />
            </FilterButtonNextButton>
        </Grid>
    )
};

export default FilterInputs;