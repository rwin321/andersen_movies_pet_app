import React, { useState } from "react";
import { getSearchMovies } from "../../api/api";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSearch, setSearchHistory } from "../../redux/movies/moviesAction";

const Search = ({ query, setQuery, setSearchData }) => {

  const dispatch = useDispatch();
  const store = useSelector(state => state.moviesReducer);
  const {searchHistory,currentSearch} = store
  const [value, setvalue] = useState('');

  console.log('searchHistory',searchHistory);

  if(currentSearch) {
    setQuery(currentSearch);
    dispatch(setCurrentSearch(''))
  }

  const onChange = (e) => {
    setQuery(e.target.value);
    setvalue(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchHistory(value))
    getSearchMovies(query)
      .then((data) => {
        setSearchData(data.results);
      })
      .catch((e) => console.log(e));
  };

  const onSearch = (e) => {

  };

  return (
    <form className="search" onSubmit={onSubmit}>
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
          onClick={(e)=>onSubmit(e)}
          className="search__btn"
          type="submit"
          variant="primary"
          size="lg"
          block
        >
          search
        </Button>
      </Form.Group>
    </form>
  );
};

export default Search;
