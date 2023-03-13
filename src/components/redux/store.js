import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import moviesReducer from "./reducers/moviesReducer";
import { loadState } from "./localStorage";
const rootReducer = combineReducers({
  search: searchReducer,
  movies: moviesReducer,
});
const store = configureStore({
  devTools: true,
  preloadedState: loadState(),
  reducer: rootReducer,
});
export default store;
