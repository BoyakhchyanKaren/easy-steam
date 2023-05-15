import { Action, configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface IAction<P> extends Action<string> {
  payload: P;
}

type SliceReducer<S, A> = (s: S, action: A) => any | ((s: S) => any);
export interface SliceReducers<S> {
  [key: string]: SliceReducer<S, IAction<any>>;
}
