import React from "react";
import logo from "../../assets/imgs/logo.png";
import { NavLink } from "react-router-dom";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo logo">
        <NavLink to="/">
          <img src={logo} alt="" className="logo__img" />
        </NavLink>
      </div>
      <div className="nav__auth-block auth-block">
        <Signin />
        <Signup />
      </div>
    </nav>
  );
};

export default Navbar;
