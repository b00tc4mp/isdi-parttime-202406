import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Call the backend API
      const response = await fetch("http://localhost:5000/api/user/registerUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          repeatPassword,
          dateOfBirth,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        (data.message || "Register succesfull")};

      if (!response.ok) {
        throw new Error(data.message || "Failed to register");
      }

      // Redirect to login page on success
      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-900 p-6 rounded-lg shadow-lg">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Full Name"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Repeat Password"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      >
        Register
      </button>
      <div className="flex justify-between">
        <Link to="/signin" className="text-white">Already have an account? Sign In</Link>
      </div>
    </form>
  );
};

export default RegisterForm;
