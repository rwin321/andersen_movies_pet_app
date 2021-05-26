import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addToHistory = createAsyncThunk(
  "movies/addMovieToFavorite",
  async (query) => query
);

export const historySlice = createSlice({
  name: "historySlice",
  initialState: {
    historyArray: ["123"],
  },
  reducers: {},
  extraReducers: {
    [addToHistory.fulfilled]: (state, { payload }) => {
      state.historyArray = state.historyArray.push(payload);
    },
  },
});

export default historySlice.reducer;
