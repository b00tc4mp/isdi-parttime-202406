import { Link } from "react-router-dom";

function UserAccess() {
  return (
    <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid">
      {/* Contenedor principal, usa flex y justify-center para centrar todo */}
      <div className="flex flex-col justify-center items-center h-full w-full bg-backgroundColor">
        {/* Círculo pequeño 1 top-left */}
        <div className="absolute rounded-full bg-circle sm:top-[7rem] sm:left-[51rem] sm:w-[70px] sm:h-[70px]"></div>
        {/* Círculo pequeño 1 top-left */}
        <div className="absolute rounded-full bg-circle sm:top-[10rem] sm:left-[44rem] sm:w-[150px] sm:h-[150px]"></div>
        {/* Círculo pequeño 2 bottom-left */}
        <div className="absolute rounded-full bg-circle sm:bottom-1/3 sm:left-[40rem] sm:w-[60px] sm:h-[60px]"></div>
        {/* Círculo pequeño 3 bottom-right*/}
        <div className="absolute rounded-full bg-circle sm:bottom-1/4 sm:right-[40rem] sm:w-[90px] sm:h-[90px]"></div>
        {/** Logo */}
        <img
          src="https://dosrosaspetresort.es/wp-content/uploads/2024/08/cropped-logovertical.png"
          alt="Doo(g)king Logo"
          className="w-auto h-auto max-w-[200px] max-h-[200px]"
        ></img>
        {/* Contenedor grande */}
        <div className="relative flex justify-center items-center rounded-full w-[500px] h-[500px] p-10 bg-circle">
          {/* Contenedor interno con los encabezados y botones */}
          <div className="flex flex-col items-center">
            {/* Contenedor de los encabezados */}
            <div className="flex flex-col items-center mb-9">
              {/* Encabezado h1 centrado */}
              <h1 className="font-sans font-bold text-6xl text-textPinkColor text-center">
                Doo(g)king
              </h1>
              {/* Encabezado h2 justo debajo y alineado a la derecha */}
              <h2 className="font-sans text-center text-textPinkColor self-end mt-2">
                Made by pet lovers
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Link
                to="/sign-up"
                target="_self"
                rel="next"
                className="btn custom-signup-btn"
              >
                Ir al formulario de registro
              </Link>
              <Link
                to="/login"
                target="_self"
                rel="next"
                className="btn custom-login-btn"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
        {/* Texto al pie de la pantalla */}
        <p className="absolute font-bold bottom-5 text-xs text-gray-500 text-center">
          By CarlosLemonCode
        </p>
      </div>
    </section>
  );
}

export default UserAccess;
