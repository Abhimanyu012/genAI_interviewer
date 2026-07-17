import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { handleLogin, error, message, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      email: "",
      password: "",
    };
    if (formData.email.trim() == "") {
      newErrors.email = "Email is required";
    }
    if (formData.password.trim() == "") {
      newErrors.password = "password is required";
    }
    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    const response = await handleLogin(formData);
    if (response) {
      navigate("/dashboard", { replace: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <p className="text-gray-500 text-center mt-2 mb-6">Welcome back!</p>
        <label className="block mb-2 font-medium">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-red-500 text-sm mt-1 mb-3">{errors.email}</p>
        <label className="block mb-2 font-medium">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-red-500 text-sm mt-1 mb-3">{errors.password}</p>
        <button
          disabled={loading}
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
