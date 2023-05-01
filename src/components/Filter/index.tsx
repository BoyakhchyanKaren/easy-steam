import React, { useState } from "react";
import { Button, Divider, Grid, IconButton, Typography, useTheme, ToggleButtonGroup, ToggleButton, TextField } from "@mui/material";
import { borderRadius, carouselWidth, margins, paddings } from "constants/themeConstants";
import FilterIcon from "assets/icons/Filter/FilterIcon";
import { TextTypography18, CustomDivider, FilterButton, FilterButtonNextButton } from "@components/common/ui-elements";
import { CarouselArrowRigth } from "assets/icons/CarouselArrow/CarouselArrow";
import { RenderCarousel } from "@components/Carousel/common";
import { filterResponsiveItems } from "./helpers";
import RenderItems from "./FilterItem";
import SortSelect from "@components/SortSelect";



const Filter = () => {
    const theme = useTheme();
    const [isFilterButtonClicked, setIsFilterButtonClicked] = useState(false);
    const handleShowFilters = () => {
        setIsFilterButtonClicked(!isFilterButtonClicked);
    }

    return (
        <Grid container direction={"column"} gap={2}>
            <Grid container alignItems={"center"} sx={{ margin: 'auto', width: carouselWidth }} xs={12}>
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
                isFilterButtonClicked && (
                    <Grid sx={{ margin: 'auto', width: carouselWidth }} container>
                        <Grid item width={350}>
                            <Grid container direction={"column"}>
                                <TextTypography18>Цена</TextTypography18>
                                <Grid item py={1}>
                                    <CustomDivider />
                                </Grid>
                                <Grid item py={3}>
                                    <Grid container direction={"row"} alignItems={"center"} gap={paddings.all4}>
                                        <FilterButton variant="contained">Мин</FilterButton>
                                        <span style={{
                                            padding: `${paddings.topBottom2} ${paddings.leftRight16}`,
                                            backgroundColor: theme.palette.primary.light,
                                            borderRadius: borderRadius.radius4
                                        }}>{' '}</span>
                                        <FilterButton variant="contained">Макс</FilterButton>
                                        <FilterButtonNextButton variant="contained">
                                            <CarouselArrowRigth />
                                        </FilterButtonNextButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item width={1000} sx={{ marginLeft: margins.left48 }}>
                            <TextTypography18>Категории</TextTypography18>
                            <Grid item py={1}>
                                <CustomDivider />
                            </Grid>
                            <RenderCarousel responsive={filterResponsiveItems} autoWidth={true} disableDotsControls={true}>
                                {RenderItems()}
                            </RenderCarousel>
                        </Grid>
                    </Grid>
                )
            }
        </Grid>
    )
};

export default Filter;