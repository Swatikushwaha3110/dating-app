import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // 🔐 Auth Guard
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Strong Validation
  const validateForm = () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (firstName.length < 2 || lastName.length < 2) {
      return "Name must be at least 2 characters long";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Enter a valid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      return "Password must be 8+ chars with uppercase, lowercase, number & special character";
    }

    if (password !== confirmPassword) {
      return "Passwords do not match";
    }

    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      // 🔁 Duplicate Email Check
      const userExists = users.find(
        (u) => u.email === formData.email
      );

      if (userExists) {
        setError("User already exists with this email");
        setLoading(false);
        return;
      }

      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setSuccess("Registration successful! Redirecting to login...");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center bg-rose-50 px-4">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow space-y-5">
        <h3 className="text-2xl font-bold text-center text-rose-500">
          Create Account
        </h3>

        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />

          <button
            disabled={loading}
            className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600 disabled:opacity-70"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-rose-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
