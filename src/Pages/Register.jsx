import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call / registration logic yaha
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
          <div className="mt-5">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Register to your account
            </h3>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">First Name</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-rose-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Last Name</label>
            <input
              type="text"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-rose-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-rose-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-rose-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-rose-600 shadow-sm rounded-lg"
            />
          </div>

          <button className="w-full px-4 py-2 text-white font-medium bg-rose-500 hover:bg-rose-600 rounded-lg shadow-md transition">
            Register
          </button>
        </form>

            {/* Login link */}
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-rose-500 hover:text-rose-600">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Register;
