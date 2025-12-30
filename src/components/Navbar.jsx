import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* MatchMe title linked to Home */}
      <Link to="/" className="text-2xl font-bold text-rose-500 hover:text-rose-600 transition">
        MatchMe
      </Link>

      <div className="space-x-4">
        <Link
          to="/login"
          className="bg-rose-500 text-white px-5 py-2 rounded-lg hover:bg-rose-600 transition font-medium shadow-md"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white border border-rose-500 text-rose-500 px-5 py-2 rounded-lg hover:bg-rose-50 transition font-medium shadow-md"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
