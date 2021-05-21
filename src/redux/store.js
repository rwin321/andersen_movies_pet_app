import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import moviesSlice from "./slices/moviesSlice";

export default configureStore({
  reducer: {
    movies: moviesSlice,
    auth: authSlice,
  },
});
