import { createSelector } from "reselect";

const getMovies = (state) => state.movies.list;
export const getSearchHistory = (state) => state.movies.searchHistory;
export const getCurrentSearch = (state) => state.movies.currentSearch;

export const searchSelector = createSelector(
  [getMovies],
  (getMovies) => (searchVal) => {
    return getMovies.filter((movie) => {
      if (searchVal === "") {
        return movie;
      } else if (
        (movie.title || movie.name)
          .toLowerCase()
          .includes(searchVal.toLowerCase().trim())
      ) {
        return movie;
      } else {
        return false;
      }
    });
  }
);
