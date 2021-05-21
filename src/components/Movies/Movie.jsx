import React from "react";
import Card from "react-bootstrap/Card";

const Movie = ({ poster, title, date, media_type }) => {
  return (
    <Card className="card">
      <Card.Body className="card__body">
        <Card.Img
          className="poster"
          variant="top"
          src={`https://image.tmdb.org/t/p/w500/${poster}`}
          alt="MovieCover"
        />
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="card__text">{date}</Card.Text>
        <Card.Subtitle className="DownTitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Movie;
