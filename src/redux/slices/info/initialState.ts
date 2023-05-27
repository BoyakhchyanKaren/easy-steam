import { InformationProps } from 'types/reduxTypes';

export const getInitialState = (): InformationProps => ({
  terms: '',
  conditions: {
    whereToFind: '',
    whereToTake: '',
    howToTake: '',
  },
  selectedFilterItems: [],
  minPrice: '',
  maxPrice: '',
  hasDiscount: false,
  selectItemValue: '',
  searchValue: '',
});
