import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  handleUpdate,
  handleDeleteClick,
  handleDeleteCancel,
  handleDeleteConfirm,
  handleDeleteAccount,
  handleEmailEdit,
  handleFullNameEdit,
  handleDateOfBirthEdit,
  
  handleFullNameUpdate,
  handleDateOfBirthUpdate,
  handlePasswordUpdate,
  handlePasswordEdit
} from '../components/handlers'
import {
  handleUpdateEmail,
  handleUpdateName,
  handleUpdatePassword,
} from '../handlers/userHandlers/';

const MyProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);
  const [showFullNameConfirm, setShowFullNameConfirm] = useState(false);
  const [showDateOfBirthConfirm, setShowDateOfBirthConfirm] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [newFullName, setNewFullName] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [showDeletePasswordConfirm, setShowDeletePasswordConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
    
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData({
          username: data.username,
          dateOfBirth: data.dateOfBirth,
          email: data.email,
          password: "",
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData();
  }, [navigate]);
  
  const handleEmailUpdate = async () => {
    setIsUpdating(true);
    try {
      await handleUpdateEmail(newEmail, currentPassword, navigate);
      console.log("Email atualizado!");
      
      // Atualiza os dados do usuário
      await fetchUserData();
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };
  
  useEffect(() => {
    if (!isUpdating) {
      fetchUserData();
    }
  }, [isUpdating]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-blue-900 p-6 rounded-lg shadow-lg w-96">
        {error && <p className="text-red-500">{error}</p>}

        {/* Nome */}
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData.username}
            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
            required
          />
          <button type="button" onClick={() => handleFullNameEdit(setShowFullNameConfirm)} className="text-blue-500">
            ✏️
          </button>
        </div>

        {showFullNameConfirm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">Insert your new Full Name</p>
              <input
                type="text"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                value={newFullName}
                onChange={(e) => setNewFullName(e.target.value)}
              />
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleUpdateName}>
                  Confirm
                </button>
                <button className="bg-blue-900 px-4 py-2 rounded-lg" onClick={() => setShowFullNameConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Data de Nascimento */}
        <div className="flex justify-between mb-4">
          <input
            type="date"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData.dateOfBirth}
            onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
            required
          />
          <button type="button" onClick={ () => handleDateOfBirthEdit(setShowDateOfBirthConfirm)} className="text-blue-500">
            ✏️
          </button>
        </div>

        {showDateOfBirthConfirm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">Insert your new Date of Birth</p>
              <input
                type="date"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                value={newDateOfBirth}
                onChange={(e) => setNewDateOfBirth(e.target.value)}
              />
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleDateOfBirthUpdate}>
                  Confirm
                </button>
                <button className="bg-blue-900 px-4 py-2 rounded-lg" onClick={() => setShowDateOfBirthConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Email */}
        <div className="flex justify-between mb-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            required
          />
          <button type="button" onClick={() => handleEmailEdit(setShowEmailConfirm)} className="text-blue-500">
            ✏️
          </button>
        </div>

        {showEmailConfirm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">Insert your new Email</p>
              <input
                type="email"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleEmailUpdate}>
                  Confirm
                </button>
                <button className="bg-blue-900 px-4 py-2 rounded-lg" onClick={() => setShowEmailConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Senha */}
        <div className="flex justify-between mb-4">
          <button
            type="button"
            onClick={() => handlePasswordEdit(setShowPasswordConfirm)}
            className="bg-yellow-500 text-black p-2 rounded-lg w-5/6 text-center"
          >
            Update Password
          </button>
        </div>

        {showPasswordConfirm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">Insert your current password and new password</p>
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Repeat New Password"
                value={repeatNewPassword}
                onChange={(e) => setRepeatNewPassword(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleUpdatePassword}>
                  Confirm
                </button>
                <button className="bg-blue-900 px-4 py-2 rounded-lg" onClick={() => setShowPasswordConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Botão de Deletar Conta */}
        <button
          type="button"
          className="text-white mt-4 text-center w-full"
          onClick={() => handleDeleteClick(setShowDeleteConfirm)}
        >
          Delete Account
        </button>
             
        
      </form>
    </div>
  );
};

export default MyProfile;
