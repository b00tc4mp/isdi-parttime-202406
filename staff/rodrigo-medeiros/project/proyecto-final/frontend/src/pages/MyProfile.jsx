import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconLogo } from "../components/icons";
import { logout } from "../logic/logout.js"
import { 
  handleUpdate,
  handleDeleteClick,
  handleDeleteCancel,
  handleDeleteConfirm,
  handleEmailEdit,
  handleFullNameEdit,
  handleDateOfBirthEdit,
  handlePasswordEdit
} from '../components/handlers'
import {
  handleUpdateEmail,
  handleUpdateName,
  handleUpdatePassword,
  handleUpdateDateOfBirth,
  handleDeleteUser
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
  
  const fetchUserData = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      // Se não houver token, redireciona para a tela de login e não faz o fetch
      navigate("/signin");
      return;
    }
  
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
      if (data) {
        setUserData({
          username: data.username,
          dateOfBirth: data.dateOfBirth,
          email: data.email,
          password: "",
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };
  
  // Busca os dados do usuário ao montar o componente
  useEffect(() => {
    fetchUserData();
  }, [navigate]);
  
  // Atualiza os dados sempre que não estiver atualizando e se o token existir
  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!isUpdating && token) {
      fetchUserData();
    }
  }, [isUpdating, navigate]);
  
  
  const handleUsernameUpdate = async () => {
    console.log("handleUsernameUpdate chamado!");
    setIsUpdating(true);
    try {
      const data = await handleUpdateName(newFullName, currentPassword); // Armazenando a resposta da API
      console.log(data); // Agora `data` será a resposta da API
      console.log("Username atualizado!");
      
      await fetchUserData(); // Chamando diretamente sem timeout
      console.log("fetchUserData executado!");
    } catch (err) {
      console.error("Erro ao atualizar o nome de usuário:", err);
    } finally {
      setIsUpdating(false);
      setShowFullNameConfirm(false);
    }
  };

  const handleDateOfBirthUpdate = async () => {
    console.log("handleDateOfBirthUpdate chamado!");
    setIsUpdating(true);
    try {
      const data = await handleUpdateDateOfBirth(newDateOfBirth, currentPassword, navigate); // Chamando o handler
      console.log(data); // Exibindo a resposta da API
      console.log("Data de nascimento atualizada!");

      await fetchUserData(); // Atualizando os dados do usuário
      console.log("fetchUserData executado!");
    } catch (err) {
      console.error("Erro ao atualizar a data de nascimento:", err);
    } finally {
      setIsUpdating(false);
      setShowDateOfBirthConfirm(false);
    }
};

  
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

  const handlePasswordUpdate = async () => {
    if (newPassword !== repeatNewPassword) {
      alert("The new passwords do not match!");
      return;
    }
    
    console.log("handlePasswordUpdate chamado!");
    setIsUpdating(true);
    
    try {
      const data = await handleUpdatePassword(currentPassword, newPassword);
      console.log(data);
      console.log("Senha atualizada!");
  
      await fetchUserData(); 
      console.log("fetchUserData executado!");
    } catch (err) {
      console.error("Erro ao atualizar a senha:", err);
    } finally {
      setIsUpdating(false);
      setShowPasswordConfirm(false);
    }
  };
  
  const handleDeleteAccount = async () => {
    console.log("Tentando excluir conta:", { password: currentPassword });
  
    if (!currentPassword) {
      alert("Por favor, insira sua senha para excluir a conta.");
      return;
    }
  
    try {
      await handleDeleteUser(currentPassword);
      console.log("handleDeleteUser executado com sucesso");
      logout(navigate); // Remove o token e redireciona o usuário
      console.log("logout() chamado a partir de handleDeleteAccount");
    } catch (err) {
      console.error("Erro ao deletar conta:", err);
      alert(err.message || "Erro ao tentar excluir a conta.");
    }
  };
  
  

  return (
    
       <div className="flex flex-col items-center bg-blue-200 min-h-screen pt-6">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center">
          <IconLogo className="h-8 w-8 text-yellow-500 mr-2" />
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
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handleUsernameUpdate}>
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
                value={newDateOfBirth || userData.dateOfBirth}
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

       {/* Botão para abrir o modal de atualização de senha */}
<div className="flex justify-between mb-4">
  <button
    type="button"
    onClick={() => setShowPasswordConfirm(true)}
    className="bg-yellow-500 text-black p-2 rounded-lg w-5/6 text-center"
  >
    Update Password
  </button>
</div>

{/* Modal de Atualização de Senha */}
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
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={handlePasswordUpdate}>
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
          onClick={() => setShowDeleteConfirm(true)} // Exibe o modal de confirmação
        >
          Delete Account
        </button>

        {/* Modal de confirmação de exclusão */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
              <p className="text-black mb-4">Confirm delete your account?</p>
              <input
                type="password"
                className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
                placeholder="Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <div className="flex justify-between">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleDeleteAccount}>
                  Confirm
                </button>
                <button className="bg-blue-900 px-4 py-2 rounded-lg" onClick={() => setShowDeleteConfirm(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
)}

             
        
      </form>
    </div>
    </div>
    
  );
};

export default MyProfile;
