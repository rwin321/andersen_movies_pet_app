import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const PagiationComponent = ({
  totalPages,
  totalItems,
  handleOnPageClick,
  next,
  prev,
  currentPage,
}) => {
  const items = [];

  for (let number = 1; number < Math.ceil(totalItems / totalPages); number++) {
    items.push(
      <Pagination.Item
        key={number}
        style={{
          backgroundColor: "lightblue",
          border: "1px solid black",
        }}
        onClick={(e) => handleOnPageClick(e, number)}
        className="paginator__item"
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <section
      className="paginator"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button disabled={currentPage === 1}>
        <GrPrevious onClick={(e) => prev(e)} />
      </Button>
      <Pagination size="sm" style={{ padding: ".3rem" }}>
        {items}
      </Pagination>
      <Button disabled={currentPage === 500}>
        <GrNext onClick={(e) => next(e)} />
      </Button>
    </section>
  );
};

export default PagiationComponent;
