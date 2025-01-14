import React, { useState, useEffect } from "react";
import getUser from "../../logic/getUser";
import classNames from "classnames";
import { IconEmail, IconUsername, IconPhone, IconNif } from "../icons";
import "animate.css";
import useEditField from "../../hooks/useEditField";
import { Validator } from "common";
import updatePhoneNumber from "../../logic/updatePhoneNumber";
import UpdatePassword from "./UpdatePassword";

function UserProfile({ className }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordSection, setShowPasswordSection] = useState(false); // Estado para manejar visibilidad

  const phoneEdit = useEditField("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        if (userData) {
          setUser(userData.user);
          phoneEdit.setValue(userData.user.phoneNumber);
        } else {
          setError("Error fetching user data");
        }
      } catch (error) {
        setError(error.message || "Unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleUpdatePhoneNumber = async () => {
    const newPhoneNumber = phoneEdit.value;
    Validator.phoneNumber(newPhoneNumber);

    try {
      await updatePhoneNumber(newPhoneNumber);

      setUser((prevUser) => ({
        ...prevUser,
        phoneNumber: newPhoneNumber,
      }));

      phoneEdit.setValue(newPhoneNumber); // Input que muestra el nuevo valor
      setIsEditing(false); // Ya no está en modo edición
      alert("¡Tu número de teléfono se ha actualizado!");
    } catch (error) {
      console.error("Error al actualizar el teléfono:", error);
      alert(
        "Ha ocurrido un error al actualizar el teléfono. Inténtalo de nuevo más tarde."
      );
    }
  };

  const handleCancelEditing = () => {
    phoneEdit.setValue(user.phoneNumber); // Resetear al número actual
    setIsEditing(false);
  };

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex justify-center w-full h-auto rounded-lg text-black mt-6 animate__animated animate__fadeIn">
      <div
        className={classNames(
          "animate-expandShadow w-[32rem] px-9 py-12 rounded-xl",
          className
        )}
      >
        <div>
          <h3 className="text-center mb-1 text-3xl text-black font-bold">
            Mi perfil
          </h3>

          <p>
            <strong>Nombre:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <IconUsername className="text-textPinkColor" />
              <input
                type="text"
                id="username"
                name="username"
                autoComplete="username"
                placeholder={user.username}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={true}
              />
            </label>
          </p>
          <p>
            <strong>Apellidos:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <IconUsername className="text-textPinkColor" />
              <input
                type="text"
                id="surname"
                name="surname"
                autoComplete="family-name"
                placeholder={user.surname}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={true}
              />
            </label>
          </p>
          <p>
            <strong>Teléfono:</strong>
            <label
              className={classNames(
                "input input-bordered flex items-center gap-2 mb-2",
                { "pulse-shadow": isEditing }
              )}
            >
              <IconPhone className="text-textPinkColor" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneEdit.value}
                onChange={(e) => phoneEdit.setValue(e.target.value)}
                className={`grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90 ${
                  !phoneEdit.isEditing && "text-gray"
                }`}
                readOnly={!isEditing}
              />
              <button
                onClick={
                  isEditing ? handleCancelEditing : () => setIsEditing(true)
                }
                className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-800"
              >
                {isEditing ? "Cancelar" : "Editar"}
              </button>
            </label>
          </p>
          <p>
            <strong>DNI:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <IconNif className="text-textPinkColor" />
              <input
                type="text"
                id="nif"
                name="nif"
                autoComplete="off"
                placeholder={user.nif}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={true}
              />
            </label>
          </p>
          <p>
            <strong>Email:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              <IconEmail className="h-5 w-5 text-textPinkColor" />
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="email"
                placeholder={user.email}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={true}
              />
            </label>
          </p>
          <div className="flex justify-between">
            <button
              onClick={() => handleUpdatePhoneNumber()}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-800"
            >
              Guardar cambios
            </button>
            <button
              className="mt-4 px-4 py-2 bg-pink text-white rounded hover:bg-darkPink"
              // Si passwordSection es true, setealo en false y a la inversa.
              onClick={() => setShowPasswordSection(!showPasswordSection)}
            >
              Editar contraseña
            </button>
          </div>
          <div>{showPasswordSection && <UpdatePassword />}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
