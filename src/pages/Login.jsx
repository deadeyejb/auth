import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="hero bg-grey-200 min-h-screen">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label text-black font-serif text-lg">
                Email
              </label>
              <input
                type="email"
                className="input rounded  bg-indigo-50 placeholder:text-gray-500"
                placeholder="Enter your email"
              />
              <label className="fieldset-label  text-black font-serif text-lg">
                Password
              </label>
              <input
                type="password"
                className="input rounded bg-indigo-50 placeholder:text-gray-500"
                placeholder="Enter your password"
              />
              <div>
                <a className="link link-hover  text-black font-serif text-sm">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              <div>
                <p className="inline-block text-gray-500 m-0">
                  Don't have an account?
                </p>
                <Link
                  className="inline-block text-gray-900 hover:text-gray-700 ml-1"
                  to="/signup"
                >
                  Sign up
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
