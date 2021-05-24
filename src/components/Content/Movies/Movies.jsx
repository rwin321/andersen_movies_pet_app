import React from "react";
import Movie from "./Movie";

const Movies = ({ searched, clickHandler, type }) => {
  return (
    searched.length > 0 &&
    searched.map((movie) => (
      <Movie
        key={movie.id}
        movie={movie}
        clickHandler={clickHandler}
        type={type}
      />
    ))
  );
};

export default Movies;
