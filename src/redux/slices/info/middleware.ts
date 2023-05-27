import { AppDispatch, RootState } from 'redux/store';
import slice from './slice';
import axios from 'axios';
import { FilterItemName } from 'types/reduxTypes';

const {
  setTerms,
  setConditions,
  setSelectedFilterItems,
  setMaxPrice,
  setMinPrice,
  setIsDiscount,
  setSelectedItem,
  setSearchValue
} = slice.actions;

const getTermsAndConditions = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('/api/info');
    if (response.data) {

      dispatch(setTerms(response.data.terms));
      dispatch(setConditions(response.data.conditions));
    }
  } catch (error) {
    console.error(error);
  }
};

const setSelectedItems = (filterItem: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const currentSelectedFilterItems = getState().info.selectedFilterItems;
  if (!currentSelectedFilterItems.includes(filterItem) && currentSelectedFilterItems.length < 5) {
    dispatch(setSelectedFilterItems([...currentSelectedFilterItems, filterItem]));
  } else {
    const index = currentSelectedFilterItems.indexOf(filterItem);
    const filteredItems = currentSelectedFilterItems.filter((_, itemIndex) => itemIndex !== index);
    return dispatch(setSelectedFilterItems([...filteredItems]));;
  }
}

const setCurrentMaxPrice = (currentPrice: string | number) => async (dispatch: AppDispatch) => {
  dispatch(setMaxPrice(currentPrice));
}
const setCurrentMinPrice = (currentPrice: string | number) => async (dispatch: AppDispatch) => {
  dispatch(setMinPrice(currentPrice));
}
const setHasDiscount = (currentDiscountState: boolean) => async (dispatch: AppDispatch) => {
  dispatch(setIsDiscount(currentDiscountState));
}
const setSelectedItemValue = (selectedItem: string) => async (dispatch: AppDispatch) => {
  dispatch(setSelectedItem(selectedItem));
};
const setSearchString = (searchString: string) => async (dispatch: AppDispatch) => {
  dispatch(setSearchValue(searchString));
};

const resetFilterItem = (filterItemName: FilterItemName, id?: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const carouselFilterItems = getState().info.selectedFilterItems;
  switch (filterItemName) {
    case FilterItemName.searchValue:
      dispatch(setSearchString(''));
      break;
    case FilterItemName.carouselFilter:
      if (id) {
        const filteredItems = carouselFilterItems.filter((item) => item !== id);
        dispatch(setSelectedFilterItems(filteredItems));
      }
      break;
    case FilterItemName.discount:
      dispatch(setIsDiscount(false));
      break;
    case FilterItemName.prices:
      dispatch(setCurrentMinPrice(''))
      dispatch(setCurrentMaxPrice(''));
      break;
    case FilterItemName.sortFilter:
      dispatch(setSelectedItem(''));
      break;
  }
};


const infoActions = {
  getTermsAndConditions,
  setSelectedItems,
  setCurrentMaxPrice,
  setCurrentMinPrice,
  setHasDiscount,
  setSelectedItemValue,
  setSearchString,
  resetFilterItem
};

export default infoActions;