import React from "react";
import { useSelector } from "react-redux";
import ResultQuery from "../../../assets/ResultQuery";

const History = () => {
  const searchHistory = useSelector((state) => state.historySlice.historyArray);

  const searchHistoryQueries =
    searchHistory.length <= 10 ? searchHistory.length : `more then 10 `;

  return (
    <div className="history">
      <h2 className="history__title">
        You have made {searchHistoryQueries} queries{" "}
      </h2>
      <ul>
        {searchHistory.length &&
          searchHistory
            .slice()
            .reverse()
            .map((el, id) => {
              if (typeof el === "string" && id <= 10) {
                return <ResultQuery key={id} text={el} />;
              }
            })}
      </ul>
    </div>
  );
};

export default History;
