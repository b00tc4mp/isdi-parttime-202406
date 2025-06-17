// src/components/LoginFormPresentation.jsx
import React from "react";
import { Link } from "react-router-dom";

const LoginFormPresentation = ({
  email,
  password,
  validationError,
  onEmailChange,
  onPasswordChange,
  onSubmit
}) => (
  <form className="bg-blue-900 p-6 rounded-lg shadow-lg" onSubmit={onSubmit}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => onEmailChange(e.target.value)}
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-1"
      required
    />
    {validationError.email && <p className="text-red-500 text-sm mb-3">{validationError.email}</p>}

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={e => onPasswordChange(e.target.value)}
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-1"
      required
    />
    {validationError.password && <p className="text-red-500 text-sm mb-3">{validationError.password}</p>}

    <button
      type="submit"
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
    >
      Login
    </button>
    <div className="flex justify-between">
      <Link to="/forgot-password" className="text-white underline text-sm">
        Forgot Password?
      </Link>
      <Link to="/register" className="text-white underline text-sm">
        Register
      </Link>
    </div>
  </form>
);

export default LoginFormPresentation;
