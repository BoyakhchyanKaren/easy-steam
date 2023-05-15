import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const selector = (state: RootState) => state.info;

const terms = createSelector([selector], (state) => state.terms);
const conditions = createSelector([selector], (state) => state.conditions);

export default {
  terms,
  conditions
};
