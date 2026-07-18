import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import loginIllustration from "../../../assets/image.png";

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

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden  px-4 py-6 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(200, 500, 800, 0.5) 0%, rgba(1, 23, 42, 0.78) 48%, rgba(2, 2, 2, 0.92) 100%), url(${loginIllustration})`,
        backgroundPosition: "center",
        backgroundSize: "fit",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.2),transparent_32%)]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <section className="flex flex-col justify-center gap-6 py-6 text-white lg:py-10">
            <span className="inline-flex w-fit items-center rounded-full border border-white  backdrop-blur-1xl hover:bg-white/20 px-3 py-3  text-xs  tracking-[0.28em] text-white font-bold uppercase">
              Welcome back
            </span>

            <div className="max-w-2xl text-zinc-100  text-shadow-lg ">
              <h1 className="animate-hero-title text-9xl font-extrabold tracking-tighter">
                <span className="animate-hero-word ">Login to</span>
                keep your work moving.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-200/85 sm:text-lg">
                Pick up right where you left off, review your dashboard, and
                continue with a focused workspace that stays out of your way.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Fast access
                </p>
                <p className="mt-1 text-sm text-white">Jump in instantly</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Clean focus
                </p>
                <p className="mt-1 text-sm text-white">Only the essentials</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                  Secure session
                </p>
                <p className="mt-1 text-sm text-white">Protected sign in</p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center lg:justify-end ">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md rounded-[1.75rem]  p-6 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl border border-zinc-500 sm:p-8"
            >
              <div className="mb-8">
                <p className="text-sm  uppercase tracking-[0.28em] text-cyan-200/80">
                  Log in
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  Access your dashboard
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Use your email and password to continue.
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>

                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
                  )}
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <label className="block text-sm font-medium text-slate-200">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-xs font-medium text-cyan-200 transition hover:text-cyan-100"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/60 focus:bg-white/10 focus:ring-2 focus:ring-cyan-400/20"
                  />

                  {errors.password && (
                    <p className="mt-2 text-sm text-rose-300">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {error && (
                <p className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-500/10 p-3 text-sm text-rose-200">
                  {error}
                </p>
              )}

              {message && (
                <p className="mt-5 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                  {message}
                </p>
              )}

              <button
                disabled={loading}
                type="submit"
                className="mt-6 text-xs flex items-center justify-center rounded-full border border-white backdrop-blur-xl hover:bg-white/20 px-3 py-3 hover:tracking-[0.50em] transition-[letter-spacing,background-color] duration-500 ease-in-out text-white font-bold uppercase w-full overflow-hidden"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Login;
