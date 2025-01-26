import React from "react";

function RegisteredDogSuccessfully({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-[24rem] h-[12rem] bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
        <p className="text-lg font-semibold text-gray-800 text-center mb-4">
          ¡Tu mascota se ha registrado correctamente!
        </p>
        <button
          onClick={onClose}
          className="green-close rounded-full px-6 py-2 text-sm shadow-md"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default RegisteredDogSuccessfully;
