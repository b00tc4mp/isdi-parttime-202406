import { Link } from "react-router-dom";
import ES from "../locales/es.json";
const {
  pages: {
    landing: { title, signupButton, loginButton },
  },
} = ES;

function Landing() {
  return (
    <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid">
      {/* Contenedor principal, usa flex y justify-center para centrar todo */}
      <div className="flex flex-col justify-center items-center h-full w-full">
        {/* Contenedor circular */}
        <div className="relative flex justify-center items-center bg-gray-800 rounded-full w-[500px] h-[500px] p-10 shadow-circle">
          {/* Contenedor interno con los encabezados y botones */}
          <div className="flex flex-col items-center">
            {/* Contenedor de los encabezados */}
            <div className="flex flex-col items-center mb-9">
              {/* Encabezado h1 centrado */}
              <h1 className="text-3xl text-white text-center">{title}</h1>
              {/* Encabezado h2 justo debajo y alineado a la derecha */}
              <h2 className="text-center text-gray self-end">
                Made by pet lovers
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <Link
                to="/sign-up"
                target="_self"
                rel="next"
                className="btn btn-primary btn-md"
              >
                {signupButton}
              </Link>
              <Link
                to="/login"
                target="_self"
                rel="next"
                className="btn btn-primary btn-md"
              >
                {loginButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
