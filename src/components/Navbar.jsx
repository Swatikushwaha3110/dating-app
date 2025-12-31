import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-rose-500 hover:text-rose-600 transition"
      >
        MatchMe
      </Link>

      {/* Right Side */}
      <div className="space-x-4">

        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-rose-600 transition font-medium shadow-md"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border border-rose-500 text-rose-500 px-5 py-2 rounded-lg hover:bg-rose-50 transition font-medium shadow-md"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="text-rose-500 font-medium hover:text-rose-600"
            >
              
            </Link>

            <button
              onClick={handleLogout}
              className="bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-rose-600 transition font-medium shadow-md"
            >
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;
