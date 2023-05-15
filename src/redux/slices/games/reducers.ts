import { SliceCaseReducers } from '@reduxjs/toolkit';
import { IAction } from 'redux/store';
import { GameImagesProps, GamesCardProps, GamesProps, IGamesProps } from 'types/reduxTypes';

const createReducer = <T extends SliceCaseReducers<GamesProps>>(reducer: T) => ({ ...reducer });

const reducers = createReducer({
  setGameImages(state, action: IAction<GameImagesProps[]>) {
    state.gameImages = action.payload;
  },
  setGames(state, action: IAction<IGamesProps>) {
    state.games = action.payload;
  },
  setCurrentFindImage(state, action: IAction<GamesCardProps>) {
    state.currentGame = action.payload;
  },
  setCurrentGamesToBasket(state, action: IAction<GamesCardProps[]>) {
    state.currentGames = action.payload;
  },
  setDrawerOpen(state, action: IAction<boolean>) {
    state.isDrawerOpen = action.payload;
  },
  setIsFilterItemsOpen(state, action: IAction<boolean>) {
    state.isFilterItemsOpen = action.payload;
  },
});

export default reducers;
