import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../../api/api";

// asyn thunk
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await getMovies();
  return data.results;
});

export const addMovieToFavorite = createAsyncThunk(
  "movies/addMovieToFavorite",
  async (movie) => movie
);

export const removeMovieFormFavorite = createAsyncThunk(
  "movies/removeMovieFromFavorite",
  async (movie) => movie
);

// movies reducer
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    loading: [],
    favorite: [],
  },
  reducers: {},
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
    [addMovieToFavorite.fulfilled]: (state, { payload }) => {
      state.favorite.push(payload);
    },
    [removeMovieFormFavorite.fulfilled]: (state, { payload }) => {
      state.favorite = state.favorite.filter(
        (movie) => movie.id !== payload.id
      );
    },
  },
});

export default moviesSlice.reducer;
