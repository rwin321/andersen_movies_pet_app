import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import moviesSlice from "./slices/moviesSlice";

export default combineReducers({
  movies: moviesSlice,
  auth: authSlice,
});
