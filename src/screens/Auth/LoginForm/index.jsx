import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [type, setType] = useState("password");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    console.log("🚀 ~ handleSubmit ~ event:", event);
    try {
      navigate("/register");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="loginForm" className="">
      <form id="inputLoginForm" onSubmit={(event) => handleSubmit(event)}>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            required
          />
        </div>
        <button
          id="post-button"
          form="inputLoginForm"
          className="m-0 mt-3 bg-green-300 min-w-20"
        >
          Login
        </button>
      </form>
      <p className="mt-3 ">
        Don't have an account?
        <button
          className="ml-1 px-3 py-2.5 min-w-20 bg-blue-300"
          type="button"
          onClick={() => navigate("/register", { replace: true })}
        >
          Register
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
