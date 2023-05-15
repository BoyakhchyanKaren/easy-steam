import { InformationProps } from 'types/reduxTypes';

export const getInitialState = (): InformationProps => ({
  terms: '',
  conditions: {
    whereToFind: '',
    whereToTake: '',
    howToTake: '',
  },
});
