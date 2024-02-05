import AlertMessage from "@components/layout/AlertMessage";
import { AuthContext } from "@contexts/AuthContexts";
import { ScreenName } from "@navigates/ScreenName";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  //Context
  const { loginUser } = useContext(AuthContext);

  //Navigate
  const navigate = useNavigate();

  //Local state
  const [type, setType] = useState("password");

  const [alert, setAlert] = useState(null);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = (event) => {
    setLoginForm({ ...loginForm, [event?.target?.name]: event?.target?.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await loginUser(loginForm);
      if (!res.success) {
        setAlert({ type: "danger", msg: res.msg });
        setTimeout(() => {
          setAlert(null);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="loginForm" className="">
      <form id="inputLoginForm" onSubmit={handleSubmit}>
        <div className="flex-col">
          <label htmlFor="username" className="block mt-3 text-left">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="block w-full"
            placeholder="Input your username"
            name="username"
            value={username}
            onChange={onChangeLoginForm}
            autoComplete="off"
            required
          />
        </div>
        <div className="flex-col">
          <label htmlFor="password" className="block mt-3 text-left">
            Password
          </label>
          <input
            id="password"
            className="block w-full"
            placeholder="Input your password"
            type="password"
            name="password"
            value={password}
            onChange={onChangeLoginForm}
            autoComplete="off"
            required
          />
        </div>
        <AlertMessage info={alert} />
        <button
          id="post-button"
          form="inputLoginForm"
          className="m-0 mt-3 bg-green-300 min-w-20"
        >
          Login
        </button>
      </form>
      <p className="mt-3">
        Don't have an account?
        <button
          id="goToRegisterButton"
          className="ml-1 px-3 py-2.5 min-w-20 bg-blue-300"
          type="button"
          onClick={() => navigate(ScreenName.Register, { replace: true })}
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
