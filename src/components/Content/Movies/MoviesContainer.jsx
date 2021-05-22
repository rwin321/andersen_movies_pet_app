import React, { useState, useEffect } from "react";
import Preloader from "../../../assets/Preloader";
import Movies from "./Movies";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../../redux/slices/moviesSlice";

const MoviesContainer = ({ searchVal }) => {
  const filteredMovies = useSelector((state) => state.movies.filtered);

  const dispatch = useDispatch();
  const data = useSelector((state) => state.movies.list);
  const loading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) return <Preloader />;

  return (
    <section className="movies__wrapper">
      <Movies data={data} searchVal={searchVal} />
    </section>
  );
};

export default MoviesContainer;
