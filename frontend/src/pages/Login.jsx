import { useState } from "react";
import { login } from "../services/authService";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password)
        setLoading(true);

        try {
            const data = await login({
                email,
                password,
            });

            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                disabled={loading}
                type="submit"
            >
                {loading
                    ? "Logging in..."
                    : "Login"}
            </button>
        </form>
    );
}

export default Login;