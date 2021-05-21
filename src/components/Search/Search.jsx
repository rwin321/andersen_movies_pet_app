import React from "react";

const Search = ({ searchVal, setSearchVal }) => {
  return (
    <div className="search">
      <h2 className="search__title">search some movies!</h2>
      <input
        className="search__input"
        type="text"
        placeholder="type some text.."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </div>
  );
};

export default Search;
