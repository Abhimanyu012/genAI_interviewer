import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { replace, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const { handleRegister, error, message, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await handleRegister(formData);
    if (response) navigate(<Dashboard />, { replace: true });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="p-2 flex items-center justify-center flex-col gap-4 border"
      >
        <h1 className=" px-3 py-1 font-bold hover:border outline-none transition-all duration-300 hover:bg-red-900/50">
          Register
        </h1>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="enter your username"
          className="border px-3 py-1"
        />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
          className="border px-3 py-1 "
        />
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
          className="border px-3 py-1"
        />
        <button
          type="submit"
          className="border p-1 rounded-md w-full"
          className="border px-3 py-1"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
