import { GamesProps } from 'types/reduxTypes';

export const getInitialState = (): GamesProps => ({
  gameImages: [],
  games: null,
  currentGame: null,
  currentGames: [],
  isDrawerOpen: false,
  isFilterItemsOpen: false,
});
