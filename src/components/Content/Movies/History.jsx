import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSearch } from "../../../redux/movies/moviesAction";
import { Redirect } from "react-router";


import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";


const History = (props) => {

  const customHistory = createBrowserHistory();


  const dispatch = useDispatch();
  const store = useSelector(state => state.moviesReducer);
  const {searchHistory, currentSearch} = store
  console.log('ARRAYYYYY',searchHistory);
  const [value, setvalue] = useState('');

  console.log('searchHistory',searchHistory);
  console.log('currentSearch',currentSearch);


  const handleClick = (e) =>{
    setvalue(e.target.textContent)
    dispatch(setCurrentSearch(e.target.textContent))
    customHistory.push('/favorite');
  }
    <Router history={customHistory}></Router>
  return <div>
    HISTORY
    <ul>
    {searchHistory.map((el)=>{
     return <li onClick={(e)=>handleClick(e)} key={el.id}>{el}</li>
    })}
    </ul>
  </div>;
};

export default History;
