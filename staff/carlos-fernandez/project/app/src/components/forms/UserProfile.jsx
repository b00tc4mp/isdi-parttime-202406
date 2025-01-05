import React, { useState, useEffect } from "react";
import getUser from "../../logic/getUser";
import classNames from "classnames";
import {
  IconEmail,
  IconUsername,
  IconPhone,
  IconNif,
  IconPassword,
} from "../icons";
import "animate.css";

function UserProfile({ className }) {
  const [user, setUser] = useState(null); // Estado que muestra info del usuario
  const [loading, setLoading] = useState(true); // Estado de carga si tarda
  const [error, setError] = useState(null); // Estado para errores si los hay
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para el modo de edición
  const [password, setPassword] = useState(""); // Estado para la contraseña

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        if (userData) {
          setUser(userData.user);
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

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  ///////////////////////////////////////////////////  COMPONENTE ///////////////////////////////////////////////////

  return (
    <div className="flex justify-center w-full rounded-lg text-black mt-10 animate__animated animate__backInUp">
      <div
        className={classNames(
          "animate-expandShadow w-[32rem] px-9 py-12 rounded-xl",
          className
        )}
      >
        <div>
          <h3 className="text-center mb-8 text-3xl text-black font-bold">
            Mi perfil
          </h3>
          {/** Botón para cambiar el estado a "Editable" o no */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            {isEditing ? "Cancelar" : "Editar"}
          </button>

          <p>
            <strong>Nombre:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-4">
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
            <label className="input input-bordered flex items-center gap-2 mb-4">
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
                "input input-bordered flex items-center gap-2 mb-4",
                { "blinking-input": isEditing }
              )}
            >
              <IconPhone className="text-textPinkColor" />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                autoComplete="tel"
                placeholder={user.phoneNumber}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={!isEditing}
              />
            </label>
          </p>
          <p>
            <strong>DNI:</strong>
            <label className="input input-bordered flex items-center gap-2 mb-4">
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
            <label className="input input-bordered flex items-center gap-2 mb-4">
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
          <p>
            <strong>Contraseña:</strong>
            <label
              className={classNames(
                "input input-bordered flex items-center gap-2 mb-4",
                { "blinking-input": isEditing }
              )}
            >
              <IconPassword className="h-5 w-5 text-textPinkColor" />
              <input
                type="password" // Asegura que el tipo de entrada es "password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="grow focus:text-gray-600 placeholder:text-gray-600 placeholder:text-opacity-90"
                readOnly={!isEditing}
              />
            </label>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
