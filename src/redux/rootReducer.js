import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import moviesSlice from "./slices/moviesSlice";
import moviesReducer from './movies/moviesReducer'

export default combineReducers({
    movies: moviesSlice,
    auth: authSlice,
    moviesReducer: moviesReducer
});