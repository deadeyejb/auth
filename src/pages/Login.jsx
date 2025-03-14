import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { supabase } from "../client/client";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    // Call Supabase signIn method
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setMessage(error.message); // Display error message
      setIsError(true);
      setEmail("");
      setPassword("");
      return;
    }
    if (data) {
      navigate("/dashboard");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="hero bg-grey-200 min-h-screen">
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {message && (
              <span className={isError ? "text-red-600" : "text-green-600"}>
                {message}
              </span>
            )}
            <fieldset className="fieldset">
              <label className="fieldset-label text-black font-serif text-lg">
                Email
              </label>
              <input
                type="email"
                className="input rounded  text-black  bg-indigo-50 placeholder:text-gray-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="fieldset-label  text-black font-serif text-lg">
                Password
              </label>
              <input
                type="password"
                className="input rounded  text-black bg-indigo-50 placeholder:text-gray-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div>
                <a className="link link-hover  text-black font-serif text-sm">
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4" onClick={handleSubmit}>
                Login
              </button>
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
