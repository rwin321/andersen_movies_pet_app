import React from "react";
import { getSearchMovies } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../redux/slices/historySlice";
import { setCurrentSearch } from "../../redux/slices/currentSearchValueSlice";

const Search = ({
  query,
  setQuery,
  setSearchData,
  setTotalSearchPages,
  setTotalSearchMovies,
}) => {
  const dispatch = useDispatch();

  const currentSearch = useSelector(
    (state) => state.currentSearchValueSlice.currentSearchValue
  );

  const onChange = (e) => {
    dispatch(setCurrentSearch(""));
    setQuery(e.target.value);
  };

  const handleClick = (e) => {
    let value = currentSearch ? currentSearch : query;
    e.preventDefault();
    dispatch(addToHistory(value));
    getSearchMovies(value)
      .then((data) => {
        setSearchData(data.results);
        setTotalSearchPages(data.total_pages);
        setTotalSearchMovies(data.total_results);
      })
      .catch((e) => console.log(e));
  };

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
          value={currentSearch === "" ? query : currentSearch}
          onChange={(e) => onChange(e)}
        />
        <Form.Text className="text-muted">
          if you login, you will get opportunity to save your favorite films
        </Form.Text>
        <Button
          onClick={(e) => handleClick(e)}
          className="search__btn"
          type="submit"
          variant="primary"
          size="lg"
          block
          disabled={query.trim() === "" && currentSearch.trim() === ""}
        >
          search
        </Button>
      </Form.Group>
    </form>
  );
};

export default Search;
