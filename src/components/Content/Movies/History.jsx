import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const History = () => {
  const searchHistory = useSelector((state) => state.historySlice.historyArray);
  // const searchHistory = getSearchHistory(state);
  // const currentSearch = getCurrentSearch(state);
  console.log(searchHistory);

  return (
    <div>
      History
      <ul>
        {searchHistory.length &&
          searchHistory.reverse().map((el, id) => {
            if (typeof el === "string" && id <= 20) {
              return <li key={id}>{el}</li>;
            }
          })}
      </ul>
    </div>
  );
};

export default History;
