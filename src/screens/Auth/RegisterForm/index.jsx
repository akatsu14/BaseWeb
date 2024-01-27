import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [type, setType] = useState("password");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
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
        <div className="flex-col">
          <label htmlFor="password" className="block mt-3 text-left">
            Confirm Password
          </label>
          <input
            id="confirm-password"
            className="block w-full"
            placeholder="Input your password"
            type="password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          className="ml-1 px-3 py-2.5 min-w-20 bg-blue-300"
          onClick={() => navigate("/login", { replace: true })}
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default RegisterForm;
