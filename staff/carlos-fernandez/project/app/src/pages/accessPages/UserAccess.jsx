import { Link } from "react-router-dom";

function UserAccess() {
  return (
    <section className="w-full h-[calc(100vh-106px)] flex items-center justify-center bg-headerColor">
      {/* Círculos decorativos 
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative w-full h-full">
        */}
      {/* Círculo 1 
          <div className="absolute rounded-full bg-circle w-[7vw] h-[7vw] top-[10%] left-[70%] translate-x-[-50%] sm:w-[70px] sm:h-[70px]"></div>
          */}
      {/* Círculo 2 
          <div className="absolute rounded-full bg-circle w-[15vw] h-[15vw] top-[20%] left-[50%] translate-x-[-50%] sm:w-[150px] sm:h-[150px]"></div>
          */}
      {/* Círculo 3 
          <div className="absolute rounded-full bg-circle w-[6vw] h-[6vw] bottom-[30%] left-[40%] translate-x-[-50%] sm:w-[60px] sm:h-[60px]"></div>
          */}
      {/* Círculo 4 
          <div className="absolute rounded-full bg-circle w-[9vw] h-[9vw] bottom-[20%] right-[30%] translate-x-[50%] sm:w-[90px] sm:h-[90px]"></div>
       
        </div>
      </div> 
      */}

      {/* Contenedor principal 
      <div className="flex flex-col items-center relative z-10 w-full max-w-[500px] p-6">
      */}
      {/** Logo 
        <img
          src="https://dosrosaspetresort.es/wp-content/uploads/2024/08/cropped-logovertical.png"
          alt="Doo(g)king Logo"
          className="w-auto h-auto max-w-[200px] max-h-[200px]"
        ></img>
*/}
      {/* Círculo central grande */}
      <div className="relative flex flex-col justify-center items-center w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] sm:max-w-[500px] sm:max-h-[500px] p-10 bg-circle rounded-full">
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
          <div className="grid grid-cols-2 gap-8 items-center text-center">
            {/* Primera fila - Dos columnas */}
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

            {/* Segunda fila - Una sola columna que ocupa ambas columnas */}
            <p className="col-span-2 font-bold text-xs text-gray-500 text-center mt-4">
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
