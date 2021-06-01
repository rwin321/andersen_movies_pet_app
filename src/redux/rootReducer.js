import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";
import historySlice from "./slices/historySlice";
import moviesSlice from "./slices/moviesSlice";
import currentSearchValueSlice from "./slices/currentSearchValueSlice";

export default combineReducers({
  moviesSlice,
  authSlice,
  historySlice,
  currentSearchValueSlice,
});
