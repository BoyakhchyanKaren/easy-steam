import React, { useEffect, useState } from "react";
import { Grid, IconButton, Grow, Button, useTheme } from "@mui/material";
import { margins } from "constants/themeConstants";
import { FilterIcon, RemoveFilterIcon } from "assets/icons/Filter/FilterIcon";
import { TextTypography18, CustomDivider } from "@components/common/ui-elements";
import { firstItems, secondItems, thirdItems, useFilterStyles } from "./helpers";
import SortSelect from "@components/SortSelect";
import FilterContent from "./FilterContent";
import { dispatch, useAppSelector } from "@redux/hooks";
import { gameMiddleware, gameSelector } from "@redux/slices/games";
import { useRouter } from "next/router";
import FilterCarousel from "./FilterCarousel";
import { infoMiddleware, infoSelector } from "@redux/slices/info";

const Filter = () => {
    const classes = useFilterStyles();
    const router = useRouter();
    const theme = useTheme();
    const items = [firstItems, secondItems, thirdItems];

    const isFilterItemsOpen = useAppSelector(gameSelector.isFilterItemsOpen);
    const selectedItemTitle = useAppSelector(infoSelector.selectedFilterItems);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleShowFilters = () => {
        dispatch(gameMiddleware.setFilterItemsOpen(!isFilterItemsOpen))
    }
    const onCardItemClick = (cardItemTitle: string) => {
        dispatch(infoMiddleware.setSelectedItems(cardItemTitle));
        setSelectedItems((previousItems) => {
            if (!previousItems.includes(cardItemTitle)) {
                return [...previousItems, cardItemTitle];
            } else {
                const index = previousItems.indexOf(cardItemTitle);
                const filteredItems = previousItems.filter((_, itemIndex) => itemIndex !== index);
                return [...filteredItems];
            }
        });
    };

    useEffect(() => {
        const url = {
            pathname: router.pathname,
            query: { ...router.query, category: selectedItemTitle }
        };
        router.push(url, undefined, { shallow: true });
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [selectedItemTitle]);

    const renderedItems = items.map((filterItem) => {
        return filterItem.map((cardItem) => {
            const selectedFilterButton = !!selectedItemTitle.find((elem) => elem === cardItem.title);
            const colorCondition = selectedFilterButton ? theme.palette.primary.main : '';
            const buttonProps = {
                classes: {
                    text: classes.text,
                },
                sx: {
                    backgroundColor: colorCondition,
                    "&:hover": {
                        backgroundColor: colorCondition,
                    }
                },
                onClick: () => onCardItemClick(cardItem.title),
                endIcon: selectedFilterButton ? (
                    <RemoveFilterIcon sx={{
                        marginLeft: margins.left12
                    }} />
                ) : null,
            }

            if (selectedFilterButton) {
                return (
                    <Grid item xs={5.5} container justifyContent={"flex-start"} alignItems={"flex-end"} key={cardItem.id}>
                        <Button
                            {...buttonProps}
                            className={classes.filterButton}
                        >
                            {cardItem.title}
                        </Button>
                    </Grid >
                )
            }

            return (
                <Grid item xs={5.5} container justifyContent={"flex-start"} alignItems={"flex-end"} key={cardItem.id}>
                    <Button
                        {...buttonProps}
                        className={classes.filterButton}
                        disabled={selectedItems.length >= 5}
                    >
                        {cardItem.title}
                    </Button>
                </Grid >
            )
        })
    })

    return (
        <Grid container direction={"column"} gap={2} className={classes.responsiveHeader}>
            <Grid container item alignItems={"center"} sx={{ margin: 'auto' }} xs={12}>
                <Grid item xs={3} container alignItems={"center"}>
                    <IconButton onClick={handleShowFilters}>
                        <FilterIcon />
                    </IconButton>
                    <TextTypography18>
                        Фильтры
                    </TextTypography18>
                </Grid>
                <Grid item xs={8} container flexWrap={"nowrap"}>
                    <SortSelect />
                </Grid>
            </Grid>
            {
                isFilterItemsOpen && (
                    <Grow
                        in={isFilterItemsOpen}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(isFilterItemsOpen ? { timeout: 700 } : { timeout: 700 })}
                    >
                        <Grid container spacing={2}>
                            <Grid item md={5} lg={4} xl={4}>
                                <FilterContent />
                            </Grid>
                            <Grid item md={7} lg={8} xl={8}>
                                <TextTypography18>Категории</TextTypography18>
                                <Grid item py={1}>
                                    <CustomDivider />
                                </Grid>
                                <FilterCarousel renderedItems={renderedItems} />
                            </Grid>
                        </Grid>
                    </Grow>
                )
            }
        </Grid>
    )
};

export default Filter;