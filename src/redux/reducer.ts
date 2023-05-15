import { combineReducers } from 'redux';
import { gameSlice } from './slices/games';
import { infoSlice } from './slices/info';

const reducer = combineReducers({
    game: gameSlice.reducer,
    info: infoSlice.reducer,
});

export default reducer;
