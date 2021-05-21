import authSlice from "./slices/authSlice";
import moviesSlice from "./slices/moviesSlice";

const rootReducer = {
  movies: moviesSlice,
  auth: authSlice,
};

export default rootReducer;
