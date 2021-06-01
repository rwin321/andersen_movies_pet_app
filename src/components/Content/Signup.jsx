import React, { useState } from "react";
import { Redirect } from "react-router";
import { Formik } from "formik";
import * as yup from "yup";

const Signup = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  const validationsSchema = yup.object().shape({
    name: yup
      .string()
      .required("Required")
      .min(4, "Must be 4 characters or more"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Must be 8 characters or more"),
    email: yup.string().email("Incorrect email"),
  });

  const handleInputLogin = (e, valuesName) => {
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
    if (data.login && data.password) {
      localStorage.setItem("data-login", data.login);
      localStorage.setItem("data-password", data.password);
      setSubmit(true);
    } else {
      alert("Error data");
    }
  };

  return (
    <div className="row signin">
      <Formik
        initialValues={{
          name: login,
          password: password,
          email: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          hangleSubmit();
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <div className="validate">
            <p>
              <label htmlFor={"name"}>Name</label>
              <br />
              <input
                className={"validate"}
                type={"text"}
                name={"name"}
                onChange={(e) => {
                  values.name = e.target.value;
                  handleInputLogin(e);
                }}
                onBlur={handleBlur}
                value={values.name}
              />
            </p>
            {touched.name && errors.name ? <p>{errors.name}</p> : null}
            <p>
              <label htmlFor={"password"}>Password</label>
              <br />
              <input
                className={"validate"}
                type={"password"}
                name={"password"}
                onBlur={handleBlur}
                value={values.password}
                onChange={(e) => {
                  values.password = e.target.value;
                  handleInputPassword(e);
                }}
              />
            </p>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <p>
              <label htmlFor={"email"}>Email</label>
              <br />
              <input
                className={"validate"}
                type={"email"}
                name={"email"}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <button
              disabled={!isValid && !dirty}
              // onClick={handleSubmite}
              type="submit"
              name="action"
              onClick={(e) => hangleSubmit(e)}
              style={{ padding: "1rem" }}
            >
              Register
            </button>
            {submit && <Redirect to="/signin" />}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
