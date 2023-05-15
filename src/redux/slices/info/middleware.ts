import { AppDispatch } from 'redux/store';
import slice from './slice';
import axios from 'axios';

const {
  setTerms,
  setConditions,
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

export default {
  getTermsAndConditions,
}