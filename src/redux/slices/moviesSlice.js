import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLatestMovies } from "../../api/api";

export const getPopularMovies = createAsyncThunk(
  "movies/getLatestMoviesData",
  async (page) => {
    try {
      const data = await getLatestMovies(page);
      return { data, page };
    } catch (e) {
      console.log(e);
    }
  }
);

export const addMovieToFavorite = createAsyncThunk(
  "movies/addMovieToFavorite",
  async (movie) => movie
);

export const removeMovieFromFavorite = createAsyncThunk(
  "movies/removeMovieFromFavorite",
  async (movie) => movie
);

// add to history tab value
export const addToHistory = createAsyncThunk(
  "movies/addToHistory",
  async (query) => query
);

export const pushHistory = createAsyncThunk(
  "movies/pushHistory",
  async (query) => query
);

// movies reducer
export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState: {
    popular: [],
    popularTotalMovies: 0,
    popularTotalPages: 0,
    popularCurrentPage: 0,
    loading: false,
    favorite: [],
    history: [],
  },
  reducers: {},
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.loading = true;
    },
    [getPopularMovies.fulfilled]: (state, { payload }) => {
      state.popular = payload.data.results;
      state.popularTotalPages = payload.data.total_pages;
      state.popularTotalMovies = payload.data.total_results;
      state.popularCurrentPage = payload.page;
      state.loading = false;
    },
    [getPopularMovies.rejected]: (state, { payload }) => {
      state.popular = payload.results;
      state.loading = false;
    },
    [addMovieToFavorite.fulfilled]: (state, { payload }) => {
      state.favorite.push(payload);
    },
    [removeMovieFromFavorite.fulfilled]: (state, { payload }) => {
      state.favorite = state.favorite.filter(
        (movie) => movie.id !== payload.id
      );
    },
  },
});

export default moviesSlice.reducer;
