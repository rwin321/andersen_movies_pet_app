import React from "react";
import {
  addMovieToFavorite,
  removeMovieFromFavorite,
} from "../../redux/slices/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { BsStarFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";

import { useHistory } from "react-router-dom";
import { setCurrentMovie } from "../../redux/slices/currentSearchValueSlice";

const MovieControls = ({ type, movie }) => {
  const history = useHistory();

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authSlice.isAuth);
  const favoriteList = useSelector((state) => state.moviesSlice.favorite);

  let addedMovieToFavorite = favoriteList.find((o) => o.id === movie.id);

  const handleClick = (controllsType) => {
    dispatch(setCurrentMovie(movie));
    history.push("/details");
  };

  return (
    <div className="inner-card-controls">
      {type === "main" && (
        <>
          <Button onClick={handleClick} className="button-card">
            <HiDotsHorizontal />
          </Button>
          {isAuth && !addedMovieToFavorite ? (
            <Button
              style={{ marginLeft: "1.5rem" }}
              onClick={() => dispatch(addMovieToFavorite(movie))}
            >
              <BsStarFill />
            </Button>
          ) : isAuth && addedMovieToFavorite ? (
            <Button
              style={{ marginLeft: ".5rem", bottom: 0 }}
              onClick={() => {
                dispatch(removeMovieFromFavorite(movie));
              }}
            >
              <RiDeleteBin6Line />
            </Button>
          ) : (
            ""
          )}
        </>
      )}
      {type === "favorite" && (
        <>
          <Button onClick={handleClick} className="button-card">
            <HiDotsHorizontal />
          </Button>
          <Button
            style={{ marginLeft: "1.5rem" }}
            onClick={() => {
              dispatch(removeMovieFromFavorite(movie));
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
