import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  // Estado para manejar la animación de explosión
  const [exploding, setExploding] = useState(false);

  const handleExplosion = () => {
    setExploding(true);
    // Después de 500 ms (duración de la animación), eliminar el estado
    setTimeout(() => {
      setExploding(false);
    }, 500);
  };

  return (
    <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid bg-gradient-to-r from-orange-300 to-purple-700">
      <div className="place-self-center w-fit">
        <div className="w-fit mx-auto mb-9">
          <h1 className="text-3xl">Bienvenido a mi Social App</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Link
            to="/sign-up"
            target="_self"
            rel="next"
            className={`btn btn-primary btn-md rounded-lg text-white  ${
              exploding ? "animate-explosion" : ""
            }`}
            onClick={handleExplosion}
          >
            Regístrate
          </Link>
          <Link
            to="/login"
            target="_self"
            rel="next"
            className={`btn btn-secondary btn-md rounded-lg text-white ${
              exploding ? "animate-explosion" : ""
            }`}
            onClick={handleExplosion}
          >
            Inicia Sesión
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;