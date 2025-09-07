import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from './gameSlice'


const rootReduser = combineReducers({
    game: gameReducer
});

export const store = configureStore({
  reducer: rootReduser
})

export type AppDispatch = typeof store.dispatch;
export type RootSlice = ReturnType<typeof rootReduser>