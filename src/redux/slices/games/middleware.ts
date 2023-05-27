import { AppDispatch, RootState } from 'redux/store';
import slice from './slice';
import axios from 'axios';
import { GamesCardProps, IGamesProps } from 'types/reduxTypes';

const {
  setGameImages,
  setGames,
  setCurrentFindImage,
  setCurrentGamesToBasket,
  setDrawerOpen,
  setIsFilterItemsOpen
} = slice.actions;

const getGames = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('/api/games');
    if (response.data) {
      const games: IGamesProps = {
        popularGames: response.data.popularGames,
        bestGames: response.data.bestGames,
      }
      dispatch(setGames(games));
      dispatch(setGameImages(response.data.gameImages));
    }
  } catch (error) {
    console.error(error);
  }
};

const setCurrentGame = (game: GamesCardProps) => (dispatch: AppDispatch) => {
  try {
    dispatch(setCurrentFindImage(game));
  } catch (error) {
    console.error(error);
  }
};

const setIsDrawerOpen = (open: boolean) => (dispatch: AppDispatch) => {
  try {
    dispatch(setDrawerOpen(open));
  } catch (error) {
    console.error(error);
  }
};

const removeGameFromBasket = (currentGame: GamesCardProps) => (dispatch: AppDispatch, getState: () => RootState) => {
  const currentGames = getState().game.currentGames;
  const currentItem = currentGames.find((game) => game.id === currentGame.id);
  if (currentItem) {
    const items = currentGames.filter((game) => game.id !== currentItem.id);
    dispatch(setCurrentGamesToBasket(items));
  }
}

const setCurrentGames = (currentGame: GamesCardProps) => (dispatch: AppDispatch, getState: () => RootState) => {
  const currentGames = getState().game.currentGames;
  const isDrawerOpen = getState().game.isDrawerOpen;
  const currentItem = currentGames.find((game) => game.id === currentGame.id);
  try {
    if (!currentGames.length) {
      dispatch(setCurrentGamesToBasket([currentGame]));
    } else {
      if (currentItem) {
        const items = currentGames.filter((game) => game.id !== currentItem.id);
        dispatch(setCurrentGamesToBasket(items));
      } else {
        dispatch(setCurrentGamesToBasket([
          ...currentGames,
          currentGame
        ]));
      }
    }
    dispatch(setDrawerOpen(!isDrawerOpen));
  } catch (error) {
    console.error(error);
  }
};

const setFilterItemsOpen = (open: boolean) => (dispatch: AppDispatch) => {
  try {
    dispatch(setIsFilterItemsOpen(open));
  } catch (error) {
    console.error(error);
  }
};

const gameActions = {
  getGames,
  setCurrentGame,
  setCurrentGames,
  setIsDrawerOpen,
  removeGameFromBasket,
  setFilterItemsOpen
}

export default gameActions;
