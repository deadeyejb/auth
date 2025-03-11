import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div>
        <div className="hero bg-grey-200 min-h-screen">
          <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label text-black font-serif text-lg">
                  Name
                </label>
                <input
                  type="text"
                  className="input rounded  bg-indigo-50 placeholder:text-gray-500"
                  placeholder="Enter your name"
                />
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

                <button className="btn btn-neutral mt-4 rounded-lg">
                  Signup
                </button>
                <div className="mt-2">
                  <p className="inline-block text-gray-500 m-0">
                    Already have an account?
                  </p>
                  <Link
                    className="inline-block text-gray-900 hover:text-gray-700 ml-1"
                    to="/login"
                  >
                    Login
                  </Link>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
