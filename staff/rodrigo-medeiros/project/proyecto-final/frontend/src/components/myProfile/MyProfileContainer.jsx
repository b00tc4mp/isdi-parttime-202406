import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconLogo } from "../icons";
import {
  handleUpdateEmail,
  handleUpdateName,
  handleUpdatePassword,
  handleUpdateDateOfBirth,
  handleDeleteUser,
} from "../../handlers/userHandlers/";
import { useUserData } from "../../hooks/useUserData";
import MyProfilePresentation from "./MyProfilePresentation.jsx";
import { useAuth } from "../../context/AuthContext"; // ⬅️ novo

const MyProfileContainer = () => {
  const navigate = useNavigate();
  const { userData, error, fetchUserData } = useUserData();
  const { isLoggedIn, logout } = useAuth(); // ⬅️ novo

  const [showFullNameModal, setShowFullNameModal] = useState(false);
  const [showDateOfBirthModal, setShowDateOfBirthModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newFullName, setNewFullName] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUsernameUpdate = async () => {
    setIsUpdating(true);
    try {
      await handleUpdateName(newFullName, currentPassword);
      await fetchUserData();
    } catch (err) {
      console.error("Erro ao atualizar o nome de usuário:", err);
    } finally {
      setIsUpdating(false);
      setShowFullNameModal(false);
    }
  };

  const handleDateOfBirthUpdate = async () => {
    setIsUpdating(true);
    try {
      await handleUpdateDateOfBirth(newDateOfBirth, currentPassword, navigate);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await fetchUserData();
    } catch (err) {
      console.error("Erro ao atualizar a data de nascimento:", err);
    } finally {
      setIsUpdating(false);
      setShowDateOfBirthModal(false);
    }
  };

  const handleEmailUpdate = async () => {
    setIsUpdating(true);
    try {
      await handleUpdateEmail(newEmail, currentPassword, navigate);
      await fetchUserData();
    } catch (err) {
      console.error("Erro ao atualizar o email:", err);
    } finally {
      setIsUpdating(false);
      setShowEmailModal(false);
    }
  };

  const handlePasswordUpdate = async () => {
    if (newPassword !== repeatNewPassword) {
      alert("The new passwords do not match!");
      return;
    }
    setIsUpdating(true);
    try {
      await handleUpdatePassword(currentPassword, newPassword);
      await fetchUserData();
    } catch (err) {
      console.error("Erro ao atualizar a senha:", err);
    } finally {
      setIsUpdating(false);
      setShowPasswordModal(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!currentPassword) {
      alert("Por favor, insira sua senha para excluir a conta.");
      return;
    }
    try {
      await handleDeleteUser(currentPassword);
      logout(); // ⬅️ via contexto
    } catch (err) {
      console.error("Erro ao deletar conta:", err);
      alert(err.message || "Erro ao tentar excluir a conta.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-blue-200 min-h-screen pt-6">
      <IconLogo className="h-8 w-8 text-yellow-500 mr-2" />
      <MyProfilePresentation
        isLoggedIn={isLoggedIn}
        userData={userData}
        error={error}
        onOpenFullNameModal={() => setShowFullNameModal(true)}
        onOpenDateOfBirthModal={() => setShowDateOfBirthModal(true)}
        onOpenEmailModal={() => setShowEmailModal(true)}
        onOpenPasswordModal={() => setShowPasswordModal(true)}
        onOpenDeleteModal={() => setShowDeleteModal(true)}
        handleUsernameUpdate={handleUsernameUpdate}
        handleDateOfBirthUpdate={handleDateOfBirthUpdate}
        handleEmailUpdate={handleEmailUpdate}
        handlePasswordUpdate={handlePasswordUpdate}
        handleDeleteAccount={handleDeleteAccount}
        showFullNameModal={showFullNameModal}
        showDateOfBirthModal={showDateOfBirthModal}
        showEmailModal={showEmailModal}
        showPasswordModal={showPasswordModal}
        showDeleteModal={showDeleteModal}
        newFullName={newFullName}
        newDateOfBirth={newDateOfBirth}
        newEmail={newEmail}
        currentPassword={currentPassword}
        newPassword={newPassword}
        repeatNewPassword={repeatNewPassword}
        onNewFullNameChange={setNewFullName}
        onNewDateOfBirthChange={setNewDateOfBirth}
        onNewEmailChange={setNewEmail}
        onCurrentPasswordChange={setCurrentPassword}
        onNewPasswordChange={setNewPassword}
        onRepeatNewPasswordChange={setRepeatNewPassword}
        onCloseFullNameModal={() => setShowFullNameModal(false)}
        onCloseDateOfBirthModal={() => setShowDateOfBirthModal(false)}
        onCloseEmailModal={() => setShowEmailModal(false)}
        onClosePasswordModal={() => setShowPasswordModal(false)}
        onCloseDeleteModal={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default MyProfileContainer;
