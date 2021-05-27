import Card from "react-bootstrap/Card";

const ResultQuery = ({ text }) => {
  return (
    <Card className="resultQuery">
      <Card.Body className="resultQuery__body">
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ResultQuery;
