import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../client/client";

const Signup = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    //if password and confirmPaassword are not same it will show error
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setIsError(true);

      // Clear the form fields in case of error

      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }, // Store name in user metadata
      },
    });
    if (error) {
      setMessage(error.message);
      setIsError(true);
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");

      return;
    }

    if (data) {
      setMessage("Account created successfully");
      setIsError(false);
      // Clear the form after successful signup

      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    }
  };
  return (
    <>
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
                Name
              </label>
              <input
                type="text"
                className="input rounded  bg-indigo-50 placeholder:text-gray-500 text-black"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="fieldset-label text-black font-serif text-lg">
                Email
              </label>
              <input
                type="email"
                className="input rounded  bg-indigo-50 placeholder:text-gray-500  text-black"
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
                className="input rounded bg-indigo-50 placeholder:text-gray-500  text-black"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="fieldset-label  text-black font-serif text-lg">
                Confirm Password
              </label>
              <input
                type="password"
                className="input rounded bg-indigo-50 placeholder:text-gray-500  text-black"
                placeholder="Enter your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button
                className="btn btn-neutral mt-4 rounded-lg"
                onClick={handleSubmit}
              >
                Signup
              </button>
              <div className="mt-2">
                <p className="inline-block text-gray-500 m-0">
                  Already have an account?
                </p>
                <Link
                  className="inline-block text-gray-900 hover:text-gray-700 ml-1"
                  to="login"
                >
                  Login
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
