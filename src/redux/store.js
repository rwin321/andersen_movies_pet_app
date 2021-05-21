import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootRedcer";

export default configureStore({
  reducer: rootReducer,
});
