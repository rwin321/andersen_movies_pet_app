import React from "react";
import {
  addMovieToFavorite,
  removeMovieFormFavorite,
} from "../../redux/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

const MovieControls = ({ type, movie }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const favoriteList = useSelector((state) => state.movies.favorite);

  let addedMovieToFavorite = favoriteList.find((o) => o.id === movie.id);
  const disabled = addedMovieToFavorite ? true : false;

  return (
    <div className="inner-card-controls">
      {type === "main" && (
        <>
          <Button className="button-card">
            <HiDotsHorizontal />
          </Button>
          {isAuth && (
            <Button
              style={{ marginLeft: "1.5rem" }}
              onClick={() => dispatch(addMovieToFavorite(movie))}
              disabled={disabled}
            >
              <BsStarFill />
            </Button>
          )}
        </>
      )}
      {type === "favorite" && (
        <>
          <Button className="button-card">
            <HiDotsHorizontal />
          </Button>
          <Button
            style={{ marginLeft: "1.5rem" }}
            onClick={() => {
              dispatch(removeMovieFormFavorite(movie));
            }}
          >
            <RiDeleteBin6Line />
          </Button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
