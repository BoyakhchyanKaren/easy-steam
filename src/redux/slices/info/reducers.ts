import { SliceCaseReducers } from '@reduxjs/toolkit';
import { IAction } from 'redux/store';
import { ConditionsProps, InformationProps } from 'types/reduxTypes';

const createReducer = <T extends SliceCaseReducers<InformationProps>>(reducer: T) => ({ ...reducer });

const reducers = createReducer({
  setTerms(state, action: IAction<string>) {
    state.terms = action.payload;
  },
  setConditions(state, action: IAction<ConditionsProps>) {
    state.conditions = action.payload;
  },
  setSelectedFilterItems(state, action: IAction<string[]>) {
    state.selectedFilterItems = action.payload;
  },
  setMaxPrice(state, action: IAction<string | number>) {
    state.maxPrice = action.payload;
  },
  setMinPrice(state, action: IAction<string | number>) {
    state.minPrice = action.payload;
  },
  setIsDiscount(state, action: IAction<boolean>) {
    state.hasDiscount = action.payload;
  },
  setSelectedItem(state, action: IAction<string>) {
    state.selectItemValue = action.payload;
  },
  setSearchValue(state, action: IAction<string>) {
    state.searchValue = action.payload;
  },
});

export default reducers;
