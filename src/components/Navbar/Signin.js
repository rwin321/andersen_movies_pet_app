import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
// import "../styles/ContentView.css";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";

const Signin = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [db, setDb] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const login = localStorage.getItem("data-login");
    const password = localStorage.getItem("data-password");
    setDb({ login, password });
  }, []);

  const handleInputLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const hangleSubmit = (e) => {
    e.preventDefault();
    const data = {
      login,
      password,
    };
    if (data.login === db.login && data.password === db.password) {
      setSubmit(true);
      dispatch(setAuth(true));
    } else {
      alert("Неверный логин или пароль");
    }
  };

  return (
    <div className="row signin">
      <h1 style={{ textAlign: "center" }}> Авторизация </h1>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              className="validate"
              value={login}
              onChange={(e) => handleInputLogin(e)}
            />
            <label htmlFor="first_name">Логин</label>
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              className="validate"
              value={password}
              onChange={(e) => handleInputPassword(e)}
            />
            <label htmlFor="password">Пароль</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={(e) => hangleSubmit(e)}
        >
          Войти
        </button>
        {submit && <Redirect to="/" />}
      </form>
    </div>
  );
};

export default Signin;
