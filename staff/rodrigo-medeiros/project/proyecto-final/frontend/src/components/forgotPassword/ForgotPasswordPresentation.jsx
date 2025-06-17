import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPresentation = ({
  email,
  dateOfBirth,
  newPassword,
  validationError,
  onEmailChange,
  onDateOfBirthChange,
  onNewPasswordChange,
  onSubmit,
}) => (
  <form className="bg-blue-900 p-6 rounded-lg shadow-lg" onSubmit={onSubmit}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => onEmailChange(e.target.value)}
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-1"
      required
    />
    {validationError.email && (
      <p className="text-red-500 text-sm mb-3">{validationError.email}</p>
    )}

    <input
      type="date"
      placeholder="Date of Birth"
      value={dateOfBirth}
      onChange={(e) => onDateOfBirthChange(e.target.value)}
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-1"
      required
    />
    {validationError.dateOfBirth && (
      <p className="text-red-500 text-sm mb-3">{validationError.dateOfBirth}</p>
    )}

    <input
      type="password"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) => onNewPasswordChange(e.target.value)}
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-1"
      required
    />
    {validationError.newPassword && (
      <p className="text-red-500 text-sm mb-3">{validationError.newPassword}</p>
    )}

    <button
      type="submit"
      className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
    >
      Reset Password
    </button>

    <div className="flex justify-between">
      <Link to="/signin" className="text-white underline text-sm">
        Back to Login
      </Link>
      <Link to="/register" className="text-white underline text-sm">
        Register
      </Link>
    </div>
  </form>
);

export default ForgotPasswordPresentation;

