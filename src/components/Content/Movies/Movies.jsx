import React from "react";
import MovieCard from "../../../common/MovieCardControls/MovieCard";
import Preloader from "../../../common/Preloader/Preloader";

const Movies = ({ data, type }) => {
  return !data ? (
    <Preloader />
  ) : (
    data.map((movie) => <MovieCard key={movie.id} movie={movie} type={type} />)
  );
};

export default Movies;
