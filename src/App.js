import "./styles/main.scss";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './styles/ContentView.css';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import Logout from "./components/Logout";
import { connect, useDispatch, useSelector } from "react-redux";
import { setAuth } from "./Store/Actions/mainAction";
import  ContentView  from './components/ContentView'
import Favorite from './components/Favorite'

const App = () => {
  const loging = localStorage.getItem('data-login')
  const password = localStorage.getItem('data-password')
  const dispatch = useDispatch();
  const store = useSelector(state => state.mainReducer);
  const {userList, isAuth} = store
 
  const [content, setContent] = useState([]);

  const [log, setLog] = useState();
  const [pas, setPass] = useState();

  const fetchRequest = async () => {
    const { data } = await axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=cd524ad267ee1be15d8602d5d5bdecad')
    setContent(data.results)
  }
  
  useEffect(() => {
    const loging = localStorage.getItem('data-login')
    const password = localStorage.getItem('data-password')
if(loging && password){
  dispatch(setAuth(true))
}
    // setLog(loging)
    // setPass(password)

    fetchRequest() 
  }, [])


  // const localFunc = () =>{
  //   if(log && pas){
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  
  return (
    <>
      <Navbar/> 

      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/favorite" exact component={Favorite} />
      {/* <Route path="/history" exact component={History} /> */}
      <Route path="/logout" exact component={Logout} />
      {/* <Signin/>
      <hr />
      <Signup/> */}
      <div className="App">
        {console.log('log++++',loging)}
   

      {loging && password ?  null :  <Redirect to="/signup" />}
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

