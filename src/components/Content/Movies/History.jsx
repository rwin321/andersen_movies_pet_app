import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addToHistory } from "../../../redux/slices/moviesSlice";

const History = () => {
  const dispatch = useDispatch();
  // const searchHistory = getSearchHistory(state);
  // const currentSearch = getCurrentSearch(state);

  return (
    <div>
      History
      {/* <ul>
        {searchHistory &&
          searchHistory.map((el, id) => {
            return <li key={id}>{el}</li>;
          })}
      </ul> */}
    </div>
  );
};

export default History;
