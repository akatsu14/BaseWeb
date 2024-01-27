import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./styles.css";

const Auth = (props) => {
  const { authRoute } = props;
  console.log("🚀 ~ Auth ~ authRoute:", authRoute);
  const [name, setName] = useState("");

  const onSubmitData = () => {
    console.log(name);
  };

  return (
    <div id="formLogin" className="landing">
      <div id="title" className="dark-overlay">
        <div className="landing-inner">
          <h1>Learn It</h1>
          <h4>Keep track of what you are learning</h4>
          {authRoute === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Auth;
