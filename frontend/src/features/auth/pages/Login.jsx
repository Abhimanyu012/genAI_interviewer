import { useState } from "react";
import { login } from "../services/authService";
import { useAuth } from "../hooks/useAuth";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { handleLogin, loading,message,error} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="red-500">
      {error && <p className="text-red-500">{error}</p>}
      <p className="text-green-400">{message}</p>
      <input
        name="email"
        type="email"
        placeholder="Enter Your Email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        required
        value={formData.password}
        onChange={handleChange}
      />
      <button disabled={loading} type="submit">
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}

export default Login;
