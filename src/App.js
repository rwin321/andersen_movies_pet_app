import "./styles/main.scss";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import ContentView from "./components/ContentView";
import './styles/ContentView.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";


const App = () => {
  const [content, setContent] = useState([]);

  // const { homepage, id, imdb_id, original_language, poster_path } = state
  // https://api.themoviedb.org/3/trending/all/week?api_key=cd524ad267ee1be15d8602d5d5bdecad
  // https://api.themoviedb.org/3/movie/550?api_key=cd524ad267ee1be15d8602d5d5bdecad?
  const fetchRequest = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=cd524ad267ee1be15d8602d5d5bdecad')
    // let response = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=cd524ad267ee1be15d8602d5d5bdecad');
    // let result = await response.json()
    // console.log(result);
    setContent(data.results)
  }

  useEffect(() => {
    const log = localStorage.getItem('data-login')
    const pass = localStorage.getItem('data-password')
    if (log && pass) {
      return null
    } else {
      alert('redirect')
    }
    fetchRequest()
  }, [])

  
  return (
    <>
      <Signin/>
      <hr />
      <Signup/>
      <div className="App">
            <div className='trending'>
              {
                content && content.map((c)=> (
                  <ContentView
                  key={c.id}
                  id={c.id}
                  poster={c.poster_path}
                  title={c.title || c.name}
                  media_type={c.media_type}
                  date={c.first_air_date || c.release_date}
                  />
                ))
              }
            </div>
          </div>
    </>
  )
}

export default App;








