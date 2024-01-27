import { ScreenName } from "@navigates/ScreenName";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { username, password, confirmPassword } = registerForm;
  const onChangeRegisterForm = (e) =>
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  const handleSubmit = async (event) => {
    console.log("🚀 ~ handleSubmit register ~ event:", event);
    try {
      navigate("/login");
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
            onChange={onChangeRegisterForm}
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
            onChange={onChangeRegisterForm}
            autoComplete="off"
            required
          />
        </div>
        <div className="flex-col">
          <label htmlFor="password" className="block mt-3 text-left">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            className="block w-full"
            placeholder="Input your password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeRegisterForm}
            autoComplete="off"
            required
          />
        </div>
        <button id="post-button" className="m-0 mt-3 bg-green-300 min-w-20">
          Register
        </button>
      </form>
      <p className="mt-3 ">
        Already have an account?
        <button
          id="goToLoginButton"
          className="ml-1 px-3 py-2.5 min-w-20 bg-blue-300"
          onClick={() => navigate(ScreenName.Login, { replace: true })}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
