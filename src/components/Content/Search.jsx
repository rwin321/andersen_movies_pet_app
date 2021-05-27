import React from "react";
import { getSearchMovies } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addToHistory } from "../../redux/slices/historySlice";

const Search = ({ query, setQuery, setSearchData }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addToHistory(query));
    getSearchMovies(query)
      .then((data) => {
        setSearchData(data.results);
      })
      .catch((e) => console.log(e));
  };

  let disableSearch = query.trim() === "" ? true : false;

  return (
    <form className="search">
      <Form.Group style={{ marginBottom: "1rem" }}>
        <Form.Label className="search__label">
          try to find some movies
        </Form.Label>
        <Form.Control
          className="search__input"
          type="text"
          placeholder="enter the movie name"
          value={query}
          onChange={onChange}
        />
        <Form.Text className="text-muted">
          if you login you will get opportunity to save your favorite films
        </Form.Text>
        <Button
          onClick={(e) => handleClick(e)}
          className="search__btn"
          type="submit"
          variant="primary"
          size="lg"
          block
          disabled={disableSearch}
        >
          search
        </Button>
      </Form.Group>
    </form>
  );
};

export default Search;
