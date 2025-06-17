import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginFormPresentation from "./LoginFormPresentation";
import { login } from "../../logic/login";
import { useAlert } from "../../context/AlertContext";

const LoginFormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationError, setValidationError] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { showAlert } = useAlert();

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
      const result = await login(email, password);
      if (result.success) {
        showAlert("Login successful!", "success");
        navigate("/");
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
