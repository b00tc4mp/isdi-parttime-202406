import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordPresentation from "./ForgotPasswordPresentation";
import { forgotPassword } from "../../logic/forgotPassword";
import { useAlert } from "../../context/AlertContext";

const ForgotPasswordContainer = () => {
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [validationError, setValidationError] = useState({
    email: "",
    dateOfBirth: "",
    newPassword: "",
  });

  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError({ email: "", dateOfBirth: "", newPassword: "" });

    let hasError = false;
    if (!email) {
      setValidationError((prev) => ({ ...prev, email: "Email is required" }));
      hasError = true;
    }
    if (!dateOfBirth) {
      setValidationError((prev) => ({
        ...prev,
        dateOfBirth: "Date of birth is required",
      }));
      hasError = true;
    }
    if (!newPassword) {
      setValidationError((prev) => ({
        ...prev,
        newPassword: "New password is required",
      }));
      hasError = true;
    }
    if (hasError) return;

    const result = await forgotPassword({ email, dateOfBirth, newPassword });

    if (result.success) {
      showAlert(result.message || "Password successfully updated", "success");
      navigate("/signin");
    } else {
      showAlert(result.message || "Failed to reset password", "error");
    }
  };

  return (
    <ForgotPasswordPresentation
      email={email}
      dateOfBirth={dateOfBirth}
      newPassword={newPassword}
      validationError={validationError}
      onEmailChange={setEmail}
      onDateOfBirthChange={setDateOfBirth}
      onNewPasswordChange={setNewPassword}
      onSubmit={handleSubmit}
    />
  );
};

export default ForgotPasswordContainer;
