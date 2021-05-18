import React from "react";
import Card from "react-bootstrap/Card";

const Movie = ({ title, body }) => {
  return (
    <Card className="card">
      <Card.Body className="card__body">
        <Card.Title className="card__title">{title}</Card.Title>
        <Card.Text className="card__text">{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
