import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./posts";

export default configureStore({
  reducer: {
    posts: postsSlice,
  },
});
