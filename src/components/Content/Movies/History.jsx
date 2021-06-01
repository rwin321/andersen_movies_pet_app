import React from "react";
import { useSelector } from "react-redux";
import SearchedQuery from "../../../common/SearchedQuery";

const History = () => {
  const searchHistory = useSelector((state) => state.historySlice.historyArray);

  return (
    <div className="history">
      <h2 className="history__title">Check your last queries</h2>
      <ul>
        {searchHistory.length &&
          searchHistory
            .slice()
            .reverse()
            .map((el, id) => {
              if (typeof el === "string" && id <= 10) {
                return <SearchedQuery key={id} text={el} />;
              }
            })}
      </ul>
    </div>
  );
};

export default History;
