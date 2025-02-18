import React from "react";
import { Link, useNavigate } from "react-router";

function NoAccountMessage({ onAddPet }) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-xl ">
      <p className="text-2xl text-gray-700 mb-4 ">
        Inicia sesión para hacer una reserva
      </p>
      <div className="flex justify-center">
        <Link
          to="/user-access"
          onClick={navigate}
          className=" btn btn-primary bg-textPinkColor hover:bg-darkPink text-white px-6 py-2 border-0"
        >
          Reserva ahora
        </Link>
      </div>
    </div>
  );
}

export default NoAccountMessage;
