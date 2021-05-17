import React from "react";
import { NavLink } from "react-router-dom";
import { GoSignIn } from "react-icons/go";

const Signin = () => {
  return (
    <NavLink to="signin" className="auth-block__signin">
      <div>
        <span>sign in </span>
        <span>
          <GoSignIn />
        </span>
      </div>
    </NavLink>
  );
};

export default Signin;
