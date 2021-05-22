import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api/api";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await getMovies();
  return data.results;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    loading: null,
  },
  reducers: {
    setFilterArray: (state, { payload }) => {
      state.filtered = payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
    [fetchMovies.rejected]: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
  },
});

export default moviesSlice.reducer;
