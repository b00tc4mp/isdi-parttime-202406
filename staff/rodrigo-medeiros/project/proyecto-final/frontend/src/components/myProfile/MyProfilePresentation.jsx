import React from "react";
import FullNameEditModal from "../modals/FullNameEditModal";
import DateOfBirthEditModal from "../modals/DateOfBirthEditModal";
import EmailEditModal from "../modals/EmailEditModal";
import PasswordEditModal from "../modals/PasswordEditModal";
import DeleteAccountModal from "../modals/DeleteAccountModal";

const UserProfileForm = ({
  isLoggedIn,
  userData,
  error,
  onOpenFullNameModal,
  onOpenDateOfBirthModal,
  onOpenEmailModal,
  onOpenPasswordModal,
  onOpenDeleteModal,
  // Handlers para cada atualização
  handleUsernameUpdate,
  handleDateOfBirthUpdate,
  handleEmailUpdate,
  handlePasswordUpdate,
  handleDeleteAccount,
  // Estados e funções para modais e inputs
  showFullNameModal,
  showDateOfBirthModal,
  showEmailModal,
  showPasswordModal,
  showDeleteModal,
  newFullName,
  newDateOfBirth,
  newEmail,
  currentPassword,
  newPassword,
  repeatNewPassword,
  onNewFullNameChange,
  onNewDateOfBirthChange,
  onNewEmailChange,
  onCurrentPasswordChange,
  onNewPasswordChange,
  onRepeatNewPasswordChange,
  onCloseFullNameModal,
  onCloseDateOfBirthModal,
  onCloseEmailModal,
  onClosePasswordModal,
  onCloseDeleteModal,
}) => {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
        <span className="text-yellow-500">My Profile</span>
      </h2>
      <form className="bg-blue-900 p-6 rounded-lg shadow-lg w-96">
        {error && <p className="text-red-500">{error}</p>}
        {/* Nome */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData?.username || ""}
            readOnly
            required
          />
          <button type="button" onClick={onOpenFullNameModal} className="text-blue-500">
            ✏️
          </button>
        </div>
        {/* Data de Nascimento */}
        <div className="flex justify-between mb-4">
          <input
            type="date"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData?.dateOfBirth || ""}
            readOnly
            required
          />
          <button type="button" onClick={onOpenDateOfBirthModal} className="text-blue-500">
            ✏️
          </button>
        </div>
        {/* Email */}
        <div className="flex justify-between mb-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData?.email || ""}
            readOnly
            required
          />
          <button type="button" onClick={onOpenEmailModal} className="text-blue-500">
            ✏️
          </button>
        </div>
        {/* Botão para abrir modal de atualização de senha */}
        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={onOpenPasswordModal}
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6 text-center"
          >
            Update Password
          </button>
        </div>
        {/* Botão de Deletar Conta */}
        <button type="button" className="text-white mt-4 text-center w-full" onClick={onOpenDeleteModal}>
          Delete Account
        </button>

        {/* Modais */}
        <FullNameEditModal
          show={showFullNameModal}
          newFullName={newFullName}
          currentPassword={currentPassword}
          onNewFullNameChange={onNewFullNameChange}
          onCurrentPasswordChange={onCurrentPasswordChange}
          onConfirm={handleUsernameUpdate}
          onCancel={onCloseFullNameModal}
        />
        <DateOfBirthEditModal
          show={showDateOfBirthModal}
          newDateOfBirth={newDateOfBirth || userData?.dateOfBirth || ""}
          currentPassword={currentPassword}
          onNewDateOfBirthChange={onNewDateOfBirthChange}
          onCurrentPasswordChange={onCurrentPasswordChange}
          onConfirm={handleDateOfBirthUpdate}
          onCancel={onCloseDateOfBirthModal}
        />
        <EmailEditModal
          show={showEmailModal}
          newEmail={newEmail}
          currentPassword={currentPassword}
          onNewEmailChange={onNewEmailChange}
          onCurrentPasswordChange={onCurrentPasswordChange}
          onConfirm={handleEmailUpdate}
          onCancel={onCloseEmailModal}
        />
        <PasswordEditModal
          show={showPasswordModal}
          currentPassword={currentPassword}
          newPassword={newPassword}
          repeatNewPassword={repeatNewPassword}
          onCurrentPasswordChange={onCurrentPasswordChange}
          onNewPasswordChange={onNewPasswordChange}
          onRepeatNewPasswordChange={onRepeatNewPasswordChange}
          onConfirm={handlePasswordUpdate}
          onCancel={onClosePasswordModal}
        />
        <DeleteAccountModal
          show={showDeleteModal}
          currentPassword={currentPassword}
          onCurrentPasswordChange={onCurrentPasswordChange}
          onConfirm={handleDeleteAccount}
          onCancel={onCloseDeleteModal}
        />
      </form>
    </div>
  );
};

export default UserProfileForm;
