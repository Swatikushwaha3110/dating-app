import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNearbyUsers = () => {
    navigate("/nearby");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-rose-50">
      {/* Content */}
      <div className="p-8 rounded-xl bg-white shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4">
          Find Your Perfect Match
        </h1>
        <p className="text-gray-700 mb-8 text-lg md:text-xl">
          Meet new people near you and start your journey of love today.
        </p>
        <div>
          <button
            onClick={handleNearbyUsers}
            className="bg-rose-500 text-white px-8 py-4 text-lg md:text-xl rounded-lg hover:bg-rose-600 transition"
          >
            View Nearby Users
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
