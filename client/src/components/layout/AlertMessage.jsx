import React from "react";
import Alert from "react-bootstrap/Alert";
import './styles.css';
const AlertMessage = ({ info }) => {
  console.log("🚀 ~ AlertMessage ~ info:", info);

  return info == null ? null : <Alert variant={info.type} className="">{info.msg}</Alert>;
};

export default AlertMessage;
