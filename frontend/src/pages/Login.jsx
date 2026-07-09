import { useState } from "react";
import { login } from "../services/authService";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");
    setMessage("")
    setLoading(true);

    try {
      const response = await login(formData);
      console.log(response.message);
      setMessage(response.message);
    } catch (error) {
      console.log(error.response?.data?.message || "something went wrong");
      setError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
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
