import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { handleLogin, error, message, loading } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await handleLogin(formData);
    if (response) {
      navigate("/dashboard",{replace:true});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="red-500">
      {error && <p>{error}</p>}

      {message && <p>{message}</p>}
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
