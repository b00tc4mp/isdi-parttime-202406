/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthContext";
import { Link, Outlet, useLocation } from "react-router-dom";
const PrivateLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const isContactsPage = location.pathname === "/emergency-contacts";

  return (
    <div className="flex h-screen z-50">
      {/* Sidebar */}
      <div className="drawer w-full z-[9999]">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Botón del Drawer (Icono de Hamburguesa) */}
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost absolute top-2 left-2 bg-white" // Clases de Tailwind CSS para el icono
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <div className="flex-grow">
           <div className="z-10"> <Outlet /></div> 
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            className="drawer-overlay"
            aria-label="Cerrar menú"
          ></label>
          <ul className="menu bg-gray-100 text-gray-800 min-h-full w-max p-4 space-y-4 shadow-lg z-50">
            <li className="text-lg font-semibold border-b pb-2"> Opciones</li>
            <li>
              <Link
                to={isContactsPage ? "/home" : "/emergency-contacts"}
                className="block px-4 py-2 rounded-md hover:bg-blue-100 transition-all duration-200"
              >
                {isContactsPage ? "➡️ Calendario" : "➡️ Contactos"}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                    logout();
                    window.location.href = "/login";
                }}
                className="block px-4 py-2 rounded-md hover:bg-red-100 text-red-600 transition-all duration-200"
              >
                ❌ Cerrar Sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
