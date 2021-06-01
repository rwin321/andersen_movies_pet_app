import React from "react";
import logo from "../../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const auth = useSelector((state) => state.authSlice.isAuth);
  const userList = useSelector((state) => state.authSlice.userList);
  const currentUser = userList[userList.length - 1].login;

  return (
    <nav className="nav">
      <div className="nav__logo">
        <NavLink to="/">
          <img src={logo} alt="" className="nav__logo-img" />
        </NavLink>
      </div>
      <div className="nav__user">
        <span className="nav__user-text">{currentUser}</span>
      </div>
      <ul className="nav__menu">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          {!auth && (
            <>
              <li>
                <NavLink to="/signin">log in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">register </NavLink>
              </li>
            </>
          )}
          {auth && (
            <>
              <li>
                <NavLink to="/favorite">FAVORITE</NavLink>
              </li>
              <li>
                <NavLink to="/history">HISTORY</NavLink>
              </li>
              <li>
                <NavLink to="/logout">EXIT</NavLink>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
