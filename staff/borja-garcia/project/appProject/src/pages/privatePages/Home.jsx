import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const Home = () => {
  const { logout } = useAuth();
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-900 via-purple-700 to-pink-800">
      {/* Sidebar */}
      <div className="drawer absolute left-0 top-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn bg-blue-600 text-white font-semibold rounded-md shadow-md px-4 py-2 cursor-pointer hover:bg-blue-700 transition-all duration-200 drawer-button scrollbar "
          >
            📂 Abrir Menú
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            aria-label="Cerrar menú"
          ></label>
          <ul className="menu bg-gray-100 text-gray-800 min-h-full w-max p-4 space-y-4 shadow-lg">
            <li className="text-lg font-semibold border-b pb-2">🌟 Opciones</li>
            <li>
              <Link
                to="/emergency-contacts"
                className="block px-4 py-2 rounded-md hover:bg-blue-100 transition-all duration-200"
              >
                ➡️ Contactos
              </Link>
            </li>
            <li>
              <button
                className="h-12 bg-red-500 text-white font-semibold rounded-md shadow-md cursor-pointer hover:bg-red-600 transition-all duration-200"
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
              >
                ❌ Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className=" max-w-md bg-white rounded-lg p-6 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            ¡Hola de nuevo! 🎉
          </h1>
          <p className="text-gray-600 mt-2">
            Bienvenido a tu espacio personal. Navega y explora las opciones.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="h-12 bg-blue-500 text-white font-semibold rounded-md shadow-md cursor-pointer hover:bg-blue-600 transition-all duration-200"
            onClick={() => console.log("Ir a perfil")}
          >
            🧑‍💻 Ir a mi Perfil
          </button>
          {/* <button
            className="h-12 bg-purple-500 text-white font-semibold rounded-md shadow-md cursor-pointer hover:bg-purple-600 transition-all duration-200"
            onClick={() => console.log("Explorar opciones")}
          >
            🚀 Explorar Opciones
          </button> */}
          <button
            className="h-12 bg-red-500 text-white font-semibold rounded-md shadow-md cursor-pointer hover:bg-red-600 transition-all duration-200"
            onClick={() => {
              logout();
              window.location.href = "/";
            }}
          >
            ❌ Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
