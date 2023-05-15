import React, { useState, useMemo } from "react";
import { Grid, IconButton, Fade } from "@mui/material";
import { carouselWidth, margins } from "constants/themeConstants";
import { FilterIcon } from "assets/icons/Filter/FilterIcon";
import { TextTypography18, CustomDivider } from "@components/common/ui-elements";
import { RenderCarousel } from "@components/Carousel/common";
import { filterResponsiveItems, firstItems, secondItems, thirdItems } from "./helpers";
import SortSelect from "@components/SortSelect";
import FilterContent from "./FilterContent";
import RenderFilterItem from "./RenderFilterItem";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware, gameSelector } from "@redux/slices/games";

const Filter = () => {
    const isFilterItemsOpen = useAppSelector(gameSelector.isFilterItemsOpen);
    const handleShowFilters = () => {
        dispatch(gameMiddleware.setFilterItemsOpen(!isFilterItemsOpen))
    }
    const items = [firstItems, secondItems, thirdItems, thirdItems, secondItems, firstItems];

    const itemsList = useMemo(() => {
        return items?.map((item) => {
            return <RenderFilterItem filterItem={item} />
        })
    }, []);

    return (
        <Grid container direction={"column"} gap={2}>
            <Grid container item alignItems={"center"} sx={{ margin: 'auto', width: carouselWidth }} xs={12}>
                <Grid item xs={3} container alignItems={"center"}>
                    <IconButton onClick={handleShowFilters}>
                        <FilterIcon />
                    </IconButton>
                    <TextTypography18>
                        Фильтры
                    </TextTypography18>
                </Grid>
                <Grid item xs={6}>
                    <SortSelect />
                </Grid>
            </Grid>
            {
                isFilterItemsOpen && (
                    <Fade
                        in={isFilterItemsOpen}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(isFilterItemsOpen ? { timeout: 700 } : { timeout: 700 })}
                    >
                        <Grid sx={{ margin: 'auto', width: carouselWidth }} container>
                            <FilterContent />
                            <Grid item width={1000} sx={{ marginLeft: margins.left48 }}>
                                <TextTypography18>Категории</TextTypography18>
                                <Grid item py={1}>
                                    <CustomDivider />
                                </Grid>
                                <RenderCarousel responsive={filterResponsiveItems} autoWidth={true} disableDotsControls={true}>
                                    {itemsList}
                                </RenderCarousel>
                            </Grid>
                        </Grid>
                    </Fade>
                )
            }
        </Grid>
    )
};

export default Filter;