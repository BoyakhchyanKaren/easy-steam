import { Grid } from "@mui/material";
import { dispatch, useAppSelector } from "@redux/hooks";
import { infoMiddleware, infoSelector } from "@redux/slices/info";
import FilterButton from "./FilterButton";
import { FilterItemName } from "types/reduxTypes";
import { formatNumber } from "@utils/floatNumber";

const FilterHeader = () => {
    const selectItemValue = useAppSelector(infoSelector.selectItemValue);
    const minPrice = useAppSelector(infoSelector.minPrice);
    const maxPrice = useAppSelector(infoSelector.maxPrice);
    const selectedFilterItems = useAppSelector(infoSelector.selectedFilterItems);
    const hasDiscount = useAppSelector(infoSelector.hasDiscount);
    const searchValue = useAppSelector(infoSelector.searchValue);
    const onResetFilterItem = (filterName: FilterItemName, itemId?: string) => {
        dispatch(infoMiddleware.resetFilterItem(filterName, itemId));
    };
    const formattedMinPrice = minPrice && `Цена Мин: ${formatNumber(minPrice)} ₽`;
    const formattedMaxPrice = maxPrice && `- Цена Макс: ${formatNumber(maxPrice)} ₽`;

    return (
        <>
            <Grid item container direction={"row"} gap={2}>
                {selectItemValue && <FilterButton title={`Сортировка: ${selectItemValue}`} onClick={() => onResetFilterItem(FilterItemName.sortFilter)} />}
                {(minPrice || maxPrice) && <FilterButton
                    title={`${formattedMinPrice} ${formattedMaxPrice}`}
                    onClick={() => onResetFilterItem(FilterItemName.prices)}
                />}
                {selectedFilterItems.length ? selectedFilterItems.map((filterItem) => {
                    return <FilterButton title={filterItem} key={filterItem} onClick={() => onResetFilterItem(FilterItemName.carouselFilter, filterItem)} />
                }) : null}
                {searchValue && <FilterButton title={`Поиск: ${searchValue}`} onClick={() => onResetFilterItem(FilterItemName.searchValue)} />}
                {hasDiscount && <FilterButton title={'Со скидкой'} onClick={() => onResetFilterItem(FilterItemName.discount)} />}
            </Grid>
        </>
    )
};

export default FilterHeader;