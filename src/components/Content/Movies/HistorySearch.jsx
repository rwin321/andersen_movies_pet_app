import React, { useEffect, useState } from "react";
import { getSearchMovies } from "../../../api/api";
import { useSelector } from "react-redux";
import Movies from "./Movies";

const HistorySearch = () => {
  const [data, setData] = useState([]);
  const currentSearch = useSelector(
    (state) => state.currentSearchValueSlice.currentSearchValue
  );

  useEffect(() => {
    getSearchMovies(currentSearch).then((res) => setData(res.results));
  }, [currentSearch]);

  return (
    data && (
      <>
        <h2 className="historySearch__title">Check the movies below!</h2>
        <section className="movies__wrapper">
          <Movies data={data} type="main" />
        </section>
      </>
    )
  );
};

export default HistorySearch;
