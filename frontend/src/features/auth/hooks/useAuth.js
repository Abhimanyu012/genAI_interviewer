import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { login, register, logout, getMe } from "../services/authService";
export const useAuth = () => {
  const context = useContext(AuthContext);

  const {
    user,
    setUser,
    loading,
    setLoading,
    error,
    setError,
    message,
    setMessage,
  } = context;
  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      const data = await login({ email, password });
      const message = data.message;
      console.log(data);
      setMessage(message);
      setUser(data.user);
      setError("");
    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    const data = await register({ username, email, password });
    setUser(data.user);
    setLoading(false);
  };
  const handleLogout = async () => {
    setLoading(true);
    const data = await logout();
    setUser(null);
    setLoading(false);
  };
  const handleGetMe = async () => {
    setLoading(true);
    setUser(data.user);
    setLoading(false);
  };

  return {
    user,
    handleLogin,
    handleRegister,
    handleLogout,
    handleGetMe,
    message,
    error,
  };
};
