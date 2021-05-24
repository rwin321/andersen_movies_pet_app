import React, { useEffect, useCallback } from "react";
import Preloader from "../../../assets/Preloader";
import Movies from "./Movies";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  addMovieToFavorite,
} from "../../../redux/slices/moviesSlice";
import { searchSelector } from "../../../redux/selectors/moviesSelector";

const MoviesContainer = ({ searchVal }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const loading = useSelector((state) => state.movies.loading);

  // importing and using reselect query for our state
  const searched = searchSelector(state)(searchVal);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const clickHandler = (movie) => {
    dispatch(addMovieToFavorite(movie));
  };

  if (loading) return <Preloader />;

  return (
    <section className="movies__wrapper">
      <Movies searched={searched} clickHandler={clickHandler} type="main" />
    </section>
  );
};

export default MoviesContainer;
