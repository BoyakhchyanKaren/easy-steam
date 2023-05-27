import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { GamesCardProps } from 'types/reduxTypes';

const selector = (state: RootState) => state.game;

const gameImages = createSelector([selector], (state) => state.gameImages);
const bestGames = createSelector([selector], (state) => state.games?.bestGames);
const popularGames = createSelector([selector], (state) => state.games?.popularGames);
const currentGame = createSelector([selector], (state) => state.currentGame);
const currentGames = createSelector([selector], (state) => state.currentGames);
const isDrawerOpen = createSelector([selector], (state) => state.isDrawerOpen);
const allGames = createSelector([selector], (state) => {
  const best = state.games?.bestGames;
  const popular = state.games?.popularGames;
  return [best as GamesCardProps[], popular as GamesCardProps[]].flat();
});
const isFilterItemsOpen = createSelector([selector], (state) => state.isFilterItemsOpen);

const gameSelectorStates = {
  gameImages,
  bestGames,
  popularGames,
  currentGame,
  currentGames,
  isDrawerOpen,
  allGames,
  isFilterItemsOpen
};

export default gameSelectorStates