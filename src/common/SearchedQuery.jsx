import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { setCurrentSearch } from "../redux/slices/currentSearchValueSlice";
import { useDispatch } from "react-redux";

const SearchedQuery = ({ text }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setCurrentSearch(e.target.textContent));
    history.push("/");
  };

  return (
    <Card onClick={(e) => handleClick(e)} className="resultQuery">
      <Card.Body className="resultQuery__body">
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SearchedQuery;
