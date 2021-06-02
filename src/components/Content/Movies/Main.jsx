import React, { useState, useEffect } from "react";
import Movies from "./Movies";
import SearchForm from "../SearchForm";
import { useSelector, useDispatch } from "react-redux";
import { getPopularMovies } from "../../../redux/slices/moviesSlice";
import Preloader from "../../../common/Preloader/Preloader";
import PagiationComponent from "../../../common/Pagination";

const Main = () => {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.moviesSlice.loading);
  const popular = useSelector((state) => state.moviesSlice.popular);

  //pagination info
  const totalPagesOfPopular = useSelector(
    (state) => state.moviesSlice.popularTotalPages
  );
  const totalMoviesOfPopular = useSelector(
    (state) => state.moviesSlice.popularTotalMovies
  );

  const itemsPerPage = 20;

  const lastPageId = currentPage * itemsPerPage;
  const firstPageId = lastPageId - itemsPerPage;

  const pageNumbers = [];
  for (
    let number = 1;
    number < Math.ceil(totalMoviesOfPopular / totalPagesOfPopular);
    ++number
  ) {
    pageNumbers.push(number);
  }

  useEffect(() => {
    dispatch(getPopularMovies(currentPage));
  }, [dispatch]);

  const handleOnPageClick = (e, num) => {
    e.preventDefault();
    setCurrentPage(num);
    dispatch(getPopularMovies(currentPage));
  };
  const handleNextClick = (e) => {
    e.preventDefault();
    setCurrentPage(++currentPage);
    dispatch(getPopularMovies(currentPage));
  };
  const handlePreviousClick = (e) => {
    e.preventDefault();
    if (currentPage === 1) return false;
    setCurrentPage(currentPage--);
    dispatch(getPopularMovies(currentPage));
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <>
      <SearchForm
        query={query}
        searchData={searchData}
        setQuery={setQuery}
        setSearchData={setSearchData}
      />
      <PagiationComponent
        totalItems={totalMoviesOfPopular}
        totalPages={totalPagesOfPopular}
        handleOnPageClick={handleOnPageClick}
        next={handleNextClick}
        prev={handlePreviousClick}
        currentPage={currentPage}
      />
      <section className="movies__wrapper">
        <Movies data={searchData.length ? searchData : popular} type="main" />
      </section>
    </>
  );
};

export default Main;
