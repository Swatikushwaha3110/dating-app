import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSuccess } from "../features/auth/authSlice";

function Login() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 🔐 Auth Guard
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      if (!users.length) {
        setError("No users found. Please register first.");
        setLoading(false);
        return;
      }

      // 🔍 Find user
      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!existingUser) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // ✅ Save login session
      localStorage.setItem("user", JSON.stringify(existingUser));
      localStorage.setItem("token", "local-auth-token"); // fake token

      // ✅ Redux update
      dispatch(loginSuccess(existingUser));

      navigate("/nearby");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 bg-rose-50">
      <div className="max-w-sm w-full text-gray-600 space-y-5">
        {/* Header */}
        <div className="text-center pb-8">
          <img
            src="https://ossimg.cmdgametransit.com/OK.Win/other/h5setting_20240313155706n3d7.png"
            width="150"
            className="mx-auto"
            alt="Logo"
          />
          <h3 className="mt-5 text-gray-800 text-2xl font-bold sm:text-3xl">
            Log in to your account
          </h3>
        </div>

        {error && (
          <p className="text-red-600 text-center text-sm font-medium">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label>Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-2 px-3 py-2 border rounded-lg"
            />
          </div>

          <button
            disabled={loading}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
