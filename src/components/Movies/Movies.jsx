import React from "react";
import Movie from "./Movie";

const Movies = ({ searchVal, data }) => {
  return (
    data &&
    data
      .filter((movie) => {
        if (searchVal === "") {
          return movie;
        } else if (
          (movie.title || movie.name)
            .toLowerCase()
            .includes(searchVal.toLowerCase().trim())
        ) {
          return movie;
        }
      })
      .map((movie) => (
        <Movie
          key={movie.id}
          poster={movie.poster_path}
          title={movie.title || movie.name}
          media_type={movie.media_type}
          date={movie.first_air_date || movie.release_date}
        />
      ))
  );
};

export default Movies;
