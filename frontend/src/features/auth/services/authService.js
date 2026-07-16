import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth",
  withCredentials: true,
});

export const login = async (data) => {
  const response = await api.post("/login", data);
  return response.data;
};
export const register = async (data) => {
  try {
    const response = await api.post("/register", data);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};
export const logout = async () => {
  try {
    const response = await api.get("/logout");
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};
export const getMe = async () => {
  const response = await api.get("/get-me");
  return response.data;
};
