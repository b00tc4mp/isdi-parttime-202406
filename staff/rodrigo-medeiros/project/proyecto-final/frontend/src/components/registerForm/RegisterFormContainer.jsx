// src/pages/RegisterFormContainer.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormPresentation from "./RegisterFormPresentation";
import { useAlert } from "../../context/AlertContext";

const RegisterFormContainer = () => {
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      showAlert("Passwords do not match", "error");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/registerUser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            email,
            password,
            repeatPassword,
            dateOfBirth,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.log("🔧 Register error:", data.message);
        throw new Error(data.message || "Failed to register");
      }

      // success
      console.log("🔧 Register success path reached");
      showAlert("User registered successfully!", "success");
      navigate("/signin");
    } catch (err) {
      setError(err.message);
      console.log("🔧 Register error (catch):", err.message);
      showAlert(err.message || "Unexpected registration error", "error");
    }
  };

  return (
    <RegisterFormPresentation
      username={username}
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      dateOfBirth={dateOfBirth}
      error={error}
      onUsernameChange={setUsername}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onRepeatPasswordChange={setRepeatPassword}
      onDateOfBirthChange={setDateOfBirth}
      onSubmit={handleSubmit}
    />
  );
};

export default RegisterFormContainer;
