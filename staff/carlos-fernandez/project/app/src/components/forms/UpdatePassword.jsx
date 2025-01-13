import React, { useState } from "react";
import updatePassword from "../../logic/updatePassword";
import { showPassword } from "../../logic/showPasswordUtils";
import { IconHidePassword, IconShowPassword } from "../icons";

function UpdatePasswordSection() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (newPassword !== confirmNewPassword) {
        setPasswordError("Las contraseñas no coinciden");
        return;
      }
      await updatePassword(currentPassword, newPassword, confirmNewPassword);
      alert("¡Contraseña actualizada con éxito!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmNewPassword("");
      setPasswordError(null);
    } catch (error) {
      setPasswordError(error.message);
    }
  };

  return (
    <div className="mt-4 p-4 border border-gray-300 rounded-lg">
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <input
            type="password"
            id="currentPassword"
            placeholder="Contraseña Actual"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            autoComplete="current-password"
          />
          <button
            className="swap swap-flip swap-active btn btn-xs p-2 btn-ghost btn-circle text-gray-400"
            type="button"
            data-showpassword="true"
            onClick={() => showPassword("showpassword", "currentPassword")}
          >
            <IconHidePassword className="swap-on w-6 h-6" />
            <IconShowPassword className="swap-off w-6 h-6" />
          </button>
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-2">
          <input
            type="password"
            placeholder="Confirmar Nueva Contraseña"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            autoComplete="new-password"
          />
        </label>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="flex bg-green-500 text-white rounded hover:bg-green-800 px-4 py-2"
          >
            Actualizar Contraseña
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePasswordSection;
