import React from "react";
import { NavLink } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";

const Signup = () => {
  return (
    <NavLink to="signup" className="auth-block__signup">
      <div>
        <span>sign up</span>
        <span>
          <BsPersonFill />
        </span>
      </div>
    </NavLink>
  );
};

export default Signup;
