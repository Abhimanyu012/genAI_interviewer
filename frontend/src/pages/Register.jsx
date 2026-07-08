import React from "react";
import { useState } from "react";
import { register } from "../services/authService";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!formData.username.trim()) {
      setError("Username is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (!formData.password.trim()) {
      setError("Password is required");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    console.log(formData);

    try {
      const response = await register(formData);
      console.log("response hai ye", response, response.message);
    } catch (error) {
      
      console.log(error.response.data.message);
      setError(error.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <form
        className="flex items-center justify-center flex-col"
        onSubmit={handelSubmit}
      >
        {/* <p>{response.message}</p> */}
        {error && <p>{error}</p>}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username..."
          className="border p-2 rounded"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email..."
          className="border p-2 rounded"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="border p-2 rounded"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
