import "./styles/main.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/ContentView.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./NavBar/NavBar";
import Logout from "./components/Logout";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./Store/Actions/mainAction";
import ContentView from "./components/ContentView";
import Favorite from "./components/Favorite";
import { getMovies } from "./api/api";

const App = () => {
  const loging = localStorage.getItem("data-login");
  const password = localStorage.getItem("data-password");
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userList = useSelector((state) => state.auth.userList);
  // const { userList, isAuth } = store;

  const [content, setContent] = useState([]);

  const [log, setLog] = useState();
  const [pas, setPass] = useState();

  const fetchRequest = async () => {
    const data = await getMovies();
    setContent(data.results);
  };

  useEffect(() => {
    const loging = localStorage.getItem("data-login");
    const password = localStorage.getItem("data-password");
    if (loging && password) {
      dispatch(setAuth(true));
    }
    // setLog(loging)
    // setPass(password)

    fetchRequest();
  }, []);

  return (
    <>
      <Navbar />

      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/favorite" exact component={Favorite} />
      {/* <Route path="/history" exact component={History} /> */}
      <Route path="/logout" exact component={Logout} />
      {/* <Signin/>
      <hr />
      <Signup/> */}
      <div className="App">
        {console.log("log++++", loging)}

        {loging && password ? null : <Redirect to="/signup" />}
        <div className="trending">
          {content &&
            content.map((c) => (
              <ContentView
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                media_type={c.media_type}
                date={c.first_air_date || c.release_date}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
