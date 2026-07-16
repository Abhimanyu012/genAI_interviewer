import { useState } from "react";
import { login } from "../services/authService";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const { user, setUser } = useAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async ({ email, password }) => {
    try {
      setLoading(true);
      setMessage("");
      setError(null);
      const response = await login({ email, password });
      setMessage(response.message);
      setUser(response.user);
      console.log(response)
      return response;
    } catch (error) {
      setError(error.response?.data?.message || error.message);

      return null;
    } finally {
      setLoading(false);
    }
  };
  return { handleLogin, error, loading, message };
};
