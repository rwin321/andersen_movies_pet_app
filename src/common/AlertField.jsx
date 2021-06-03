import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertField = ({ children }) => {
  return <Alert className="alert">{children}</Alert>;
};

export default AlertField;
