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
});

export default reducers;
