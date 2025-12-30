import React from "react";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // API call or login logic yaha
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
              Log in to your account
            </h3>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label className="font-medium">Password</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-red-600 shadow-sm rounded-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                className="checkbox-item peer hidden"
              />
              <label
                htmlFor="remember-me-checkbox"
                className="relative flex w-5 h-5 bg-white peer-checked:bg-red-600 rounded-md border ring-offset-2 ring-red-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <Link
              to="/forgot-password"
              className="text-center text-red-600 hover:text-red-500"
            >
              Forgot password?
            </Link>
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-red-600 hover:bg-red-500 active:bg-red-600 rounded-lg duration-150">
            Sign in
          </button>
        </form>

            {/* Signup link */}
        <p className="text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-medium text-red-600 hover:text-red-500">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
