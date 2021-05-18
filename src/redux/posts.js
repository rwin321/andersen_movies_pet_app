import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state) => {
      state.loading = true;
    },
    [fetchPosts.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
    [fetchPosts.rejected]: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
  },
});

export default postsSlice.reducer;
