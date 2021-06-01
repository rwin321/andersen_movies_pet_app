import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToHistory = createAsyncThunk(
  "movies/addMovieToFavorite",
  async (query) => query
);

export const historySlice = createSlice({
  name: "historySlice",
  initialState: {
    historyArray: [],
  },
  reducers: {},
  extraReducers: {
    [addToHistory.fulfilled]: (state, { payload }) => {
      state.historyArray.push(payload);
      if (state.historyArray.length > 20) {
        state.historyArray.unshift();
      }
    },
  },
});

export default historySlice.reducer;
