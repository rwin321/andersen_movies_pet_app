import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import Search from "../Search";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies } from "../../../redux/slices/moviesSlice";

const Main = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.movies.loading);
  const popular = useSelector((state) => state.movies.popular);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <>
      <Search
        query={query}
        searchData={searchData}
        setQuery={setQuery}
        setSearchData={setSearchData}
      />
      <section className="movies__wrapper">
        <Movies data={searchData.length ? searchData : popular} type="main" />
      </section>
    </>
  );
};

export default Main;
