// src/components/LoginFormContainer.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormPresentation from "./LoginFormPresentation";
import { useAlert } from "../../context/AlertContext";
import { useAuth } from "../../context/AuthContext"; // <-- importa o contexto

const LoginFormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const { login } = useAuth(); // <-- usa login do contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError({ email: "", password: "" });

    let hasError = false;
    if (!email) {
      setValidationError(prev => ({ ...prev, email: "Email is required" }));
      hasError = true;
    }
    if (!password) {
      setValidationError(prev => ({ ...prev, password: "Password is required" }));
      hasError = true;
    }
    if (hasError) return;

    try {
      const result = await login(email, password); // <-- usa função do contexto
      if (result.success) {
        showAlert("Login successful!", "success");
        // redirecionamento já é feito pelo contexto
      } else {
        showAlert(result.message || "Login failed", "error");
      }
    } catch (err) {
      showAlert(err.message || "Unexpected login error", "error");
    }
  };

  return (
    <LoginFormPresentation
      email={email}
      password={password}
      validationError={validationError}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default LoginFormContainer;
