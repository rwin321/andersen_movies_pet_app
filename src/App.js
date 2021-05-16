import "./styles/main.scss";
import React, { useEffect } from "react";
import useFetch from "./hooks/useFetch";

const App = () => {
  const  {data, loading, error} = useFetch('https://api.themoviedb.org/3/movie/550?api_key=cd524ad267ee1be15d8602d5d5bdecad')
  if(loading) {
    return 'Loading...'
 }
 
 if(error) {
    console.log('Ошибка'); 
    return null
 }
 

  return (
    <div className="App">
      <div>APP</div>
      <div>
         {JSON.stringify(data)}
         {console.log(data)}
       </div>
    </div>
  );
};

export default App;








