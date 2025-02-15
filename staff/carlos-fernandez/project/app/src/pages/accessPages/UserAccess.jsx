import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function UserAccess() {
  const [headerHeight, setHeaderHeight] = useState(91.01); // Altura por defecto (versión móvil)

  useEffect(() => {
    const updateHeight = () => {
      // Detecta si la pantalla es >= lg (1024px)
      if (window.innerWidth >= 1024) {
        setHeaderHeight(122); // Header grande
      } else {
        setHeaderHeight(91.01); // Header móvil
      }
    };
    // Ejecutar al cargar
    updateHeight();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener("resize", updateHeight);

    // Limpiar el event listener al desmontar
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <section
      style={{ height: `calc(100vh - ${headerHeight}px)` }}
      className="w-full flex items-center justify-center bg-headerColor"
    >
      {/* Círculo central grande */}
      <div className="relative flex flex-col justify-center items-center min-w-[300px] min-h-[300px] w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px] p-10 bg-circle rounded-full ">
        {/* Contenedor interno con los encabezados y botones */}
        <div className="flex flex-col items-center">
          {/* Contenedor de los encabezados */}
          <div className="flex flex-col items-center mb-7">
            {/* Encabezado h1 centrado */}
            <h1 className="font-sans font-bold text-3xl xs:text-5xl lg:text-6xl text-textPinkColor text-center">
              Doo(g)king
            </h1>
            {/* Encabezado h2 justo debajo y alineado a la derecha */}
            <h2 className="font-sans text-xs lg:text-3xl text-center text-textPinkColor self-end mt-2">
              Made by pet lovers
            </h2>
          </div>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 items-center text-center">
            {/* Una columna para movil dos columnas para más grandes */}
            <Link
              to="/sign-up"
              target="_self"
              rel="next"
              className="btn custom-signup-btn w-full xs:w-auto"
            >
              <span className="hidden xs:block">
                Ir al formulario de registro
              </span>
              <span className="block xs:hidden">Regístrate</span>
            </Link>
            <Link
              to="/login"
              target="_self"
              rel="next"
              className="btn text-s custom-login-btn w-fit xs:w-auto"
            >
              Iniciar sesión
            </Link>

            {/* Segunda fila - Una sola columna que ocupa ambas columnas */}
            <p className="col-span-1 xs:col-span-2 font-bold text-xxs xs:text-xs text-gray-500 text-center mt-0">
              By CarlosLemonCode
            </p>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </section>
  );
}

export default UserAccess;
