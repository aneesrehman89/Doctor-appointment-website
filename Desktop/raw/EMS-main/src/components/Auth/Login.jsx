import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br text-black from-emerald-400 to-teal-600 p-4">
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-8 sm:p-12 md:p-8 w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl font-bold text-black text-center mb-6">
          Welcome Back
        </h2>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center space-y-6"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-gray-50 border border-emerald-300 focus:border-emerald-600 font-medium text-base md:text-md py-2 px-5 rounded-lg w-full md:w-80  placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-300"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-gray-50 border border-emerald-300 focus:border-emerald-600 font-medium text-base md:text-md py-2 px-5 rounded-lg w-full md:w-80 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-300"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-6 text-white font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 py-2 px-6 w-full md:w-80 rounded-lg shadow-lg transition-all">
            Log in
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-emerald-600 font-semibold hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
