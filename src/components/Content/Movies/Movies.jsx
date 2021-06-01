import React from "react";
import MovieCard from "../../../common/MovieCardControls/MovieCard";

const Movies = ({ data, type }) => {
  return (
    data &&
    data.map((movie) => <MovieCard key={movie.id} movie={movie} type={type} />)
  );
};

export default Movies;
