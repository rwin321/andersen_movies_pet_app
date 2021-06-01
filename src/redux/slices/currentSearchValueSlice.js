import { createSlice } from "@reduxjs/toolkit";

const currentSearchValueSlice = createSlice({
  name: "currentSlice",
  initialState: {
    currentMovie: [],
    currentSearchValue: "",
  },
  reducers: {
    setCurrentMovie(state, action) {
      state.currentMovie = [action.payload];
    },
    setCurrentSearch(state, action) {
      state.currentSearchValue = action.payload;
    },
  },
});

export default currentSearchValueSlice.reducer;
export const { setCurrentMovie, setCurrentSearch } =
  currentSearchValueSlice.actions;
