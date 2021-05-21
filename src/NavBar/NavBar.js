import React from "react";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.auth.isAuth);

  const styles = {
    navbar: {
      marginBottom: 20,
    },
  };
  return (
    <nav style={styles.navbar}>
      <ul className="">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          {!auth && (
            <>
              <li>
                <NavLink to="/signin">Войти</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Зарегистрироваться </NavLink>
              </li>
            </>
          )}
          {auth && (
            <>
              <li>
                <NavLink to="/favorite">Избранное</NavLink>
              </li>
              <li>
                <NavLink to="/history">История</NavLink>
              </li>
              <li>
                <NavLink to="/logout">Выход</NavLink>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
