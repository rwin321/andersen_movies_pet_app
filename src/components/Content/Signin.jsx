import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/authSlice";
import { Formik } from "formik";
import * as yup from "yup";
import AlertField from "../../common/AlertField";

const Signin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [db, setDb] = useState({});
  const [alert, setAlert] = useState(false);

  const validationsSchema = yup.object().shape({
    name: yup.string().required("Required "),
    password: yup.string().required("Required "),
  });

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
      dispatch(setAuth(true));
      history.push("/");
    } else {
      setAlert(true);
    }
  };

  return (
    <div className="row signin">
      <Formik
        initialValues={{
          name: login,
          password: password,
        }}
        validateOnBlur
        onSubmit={(values) => {
          hangleSubmit();
        }}
        validationSchema={validationsSchema}
      >
        {({ values, errors, touched, handleBlur }) => (
          <div className="validate">
            <p>
              <label htmlFor={"name"}>Name</label>
              <br />
              <input
                className={"validate"}
                type={"text"}
                name={"name"}
                onBlur={handleBlur}
                value={values.name}
                onChange={(e) => {
                  values.name = e.target.value;
                  handleInputLogin(e);
                }}
              />
            </p>
            {touched.name && errors.name && <p>{errors.name}</p>}
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
            <button
              type="submit"
              name="action"
              onClick={(e) => hangleSubmit(e)}
              style={{ padding: "1rem" }}
            >
              login
            </button>
            {alert && (
              <AlertField className="alert">
                Incorrect login or email
              </AlertField>
            )}
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
