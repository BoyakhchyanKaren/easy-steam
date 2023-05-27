import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const selector = (state: RootState) => state.info;

const terms = createSelector([selector], (state) => state.terms);
const conditions = createSelector([selector], (state) => state.conditions);
const selectedFilterItems = createSelector([selector], (state) => state.selectedFilterItems);
const maxPrice = createSelector([selector], (state) => state.maxPrice);
const minPrice = createSelector([selector], (state) => state.minPrice);
const hasDiscount = createSelector([selector], (state) => state.hasDiscount);
const selectItemValue = createSelector([selector], (state) => state.selectItemValue);
const searchValue = createSelector([selector], (state) => state.searchValue);

const infoSelectorStates = {
  terms,
  conditions,
  selectedFilterItems,
  maxPrice,
  minPrice,
  hasDiscount,
  selectItemValue,
  searchValue
};

export default infoSelectorStates;