import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { setAuth } from "../../redux/slices/authSlice";

const Logout = ({}) => {
  const [loggedOut, setLoggedOut] = useState(false);
  const [isGoBack, setIsGoBack] = useState(false);

  const dispatch = useDispatch();

  const handleExit = () => {
    setLoggedOut(true);
    localStorage.clear();
    dispatch(setAuth(false));
  };
  const handleGoBack = () => {
    setIsGoBack(true);
  };

  if (loggedOut || isGoBack) return <Redirect to="/" />;

  return (
    <div className="logoutBlock">
      <h1>Выйти из учетной записи?</h1>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleExit}
      >
        ВЫЙТИ
      </button>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
        onClick={handleGoBack}
      >
        НАЗАД
      </button>
    </div>
  );
};

export default Logout;
