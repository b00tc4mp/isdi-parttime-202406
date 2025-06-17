import React from "react";
import { Link } from "react-router-dom";

const RegisterFormPresentation = ({
  username,
  email,
  password,
  repeatPassword,
  dateOfBirth,
  error,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onRepeatPasswordChange,
  onDateOfBirthChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="bg-blue-900 p-6 rounded-lg shadow-lg">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <input
        type="text"
        placeholder="Full Name"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={username}
        onChange={e => onUsernameChange(e.target.value)}
        required
      />

      <input
        type="date"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={dateOfBirth}
        onChange={e => onDateOfBirthChange(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={email}
        onChange={e => onEmailChange(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Repeat Password"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={repeatPassword}
        onChange={e => onRepeatPasswordChange(e.target.value)}
        required
      />

      <button
        type="submit"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      >
        Register
      </button>

      <div className="flex justify-between">
        <Link to="/signin" className="text-white underline">
          Already have an account? Sign In
        </Link>
      </div>
    </form>
  );
};

export default RegisterFormPresentation;
