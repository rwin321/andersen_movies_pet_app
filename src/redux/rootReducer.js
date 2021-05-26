import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import historySlice from "./slices/historySlice";
import moviesSlice from "./slices/moviesSlice";

export default combineReducers({
  movies: moviesSlice,
  auth: authSlice,
  historySlice,
});
