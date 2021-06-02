import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const PaginationComponent = ({
  totalPages,
  totalItems,
  handleOnPageClick,
  next,
  prev,
  currentPage,
}) => {
  const items = [];

  for (
    let number = 1;
    number < Math.ceil(totalItems / totalPages) / 2 + 1;
    number++
  ) {
    items.push(
      <Pagination.Item
        key={number}
        onClick={(e) => handleOnPageClick(e, number)}
        className="paginator__item"
        style={{
          backgroundColor: currentPage === number && "rgba(173, 20, 20, 0.534)",
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section className="paginator">
      <Button className="paginator__btn" disabled={currentPage === 1}>
        <GrPrevious onClick={(e) => prev(e)} />
      </Button>
      <Pagination className="paginator__pages">{items}</Pagination>
      <Button className="paginator__btn" disabled={currentPage === 500}>
        <GrNext onClick={(e) => next(e)} />
      </Button>
    </section>
  );
};

export default PaginationComponent;
