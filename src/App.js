import "./styles/main.scss";
import React, { useEffect, useState } from "react";

const App = () => {
  const [state, setstate] = useState('');
  const { homepage, id, imdb_id, original_language, poster_path } = state

  const fetchRequest = async () => {
    let response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=cd524ad267ee1be15d8602d5d5bdecad');
    let result = await response.json()
    setstate(result)
  }

  useEffect(() => {
    fetchRequest()
  }, [])

  return (
    <div className="App">
      <div>APP</div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="MovieCover"
        />
        {/* <p>{state.homepage}</p>
        <p>{state.id}</p> */}
        <p>{homepage}</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default App;








