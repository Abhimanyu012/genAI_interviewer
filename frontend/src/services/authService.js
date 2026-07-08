import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api/auth",
    withCredentials: true
});

export const login = async (data) => {
    const res = await api.post('/login', data)
    return res.data
}
export const register = async (data) => {
    const res = await api.post('/register', data)
    return res.data
}
export const logout = (data) => {
    const res = api.post('/logout', data)

}
export const getMe = async (data) => {
    const res = await api.get('/get-me', data)
}