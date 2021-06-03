import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import movie_alt from "../../../assets/imgs/movie_alt.jpg";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Details = () => {
  const history = useHistory();
  const movie = useSelector(
    (state) => state.currentSearchValueSlice.currentMovie[0]
  );

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Card className="card card_detail">
      <Button
        onClick={handleClick}
        className="button-card button-card_back"
        style={{
          color: "white",
        }}
      >
        BACK
      </Button>
      <Card.Body className="card__bodyCurrent">
        <Card.Img
          variant="top"
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : movie_alt
          }
          alt="MovieCover"
        />
        <div className="card__info">
          <Card.Title className="card__title">
            <span>{movie.title || movie.original_name}</span>
          </Card.Title>
          <Card.Text className="card__text">
            {movie.release_date ? movie.release_date : "no date info"}
          </Card.Text>
          <Card.Text className="card__rating">{movie.vote_average}</Card.Text>
          <Card.Subtitle className="DownTitle">
            {movie.media_type === "tv" ? "TV Series" : "Movie"}
          </Card.Subtitle>

          <Card.Text className="card__text">{movie.original_title}</Card.Text>
          <Card.Text className="card__text_overview">
            {movie.overview}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Details;
