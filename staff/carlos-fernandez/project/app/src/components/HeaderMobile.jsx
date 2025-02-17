import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserAreaBtn } from "./buttons/UserAreaBtn";
import { useState } from "react";

function HeaderMobile({ onUserLoggedOut }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = !!sessionStorage.getItem("token");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Abrir el menú hamburguesa
  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      if (!prev) setIsDropdownOpen(false); // cierra el areaCliente si el menú se abre
      return !prev;
    });
  };

  // Abrir botón área clientes
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => {
      if (!prev) setIsMenuOpen(false); //cierra el menú si el areaCliente se abre
      return !prev;
    });
  };

  ////////////////////////////////////////////////// COMPONENTE //////////////////////////////////////////////////
  return (
    <header className="bg-headerColor p-4 flex justify-between items-center relative z-50">
      {/* Botón hamburguesa */}
      <div className="flex items-center">
        <button onClick={toggleMenu} className="text-black text-3xl ml-4">
          ☰
        </button>
      </div>

      {/* Logo */}
      <img
        src="https://dosrosaspetresort.es/wp-content/uploads/2024/08/cropped-logovertical.png"
        alt="Doo(g)king Logo"
        className="w-20 h-auto "
      ></img>

      {/* Botón área clientes */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {/* Mostrar UserAreaBtn si el usuario está autenticado, caso contrario mostrar el botón de acceso */}
        {isLoggedIn ? (
          <UserAreaBtn
            onUserLoggedOut={onUserLoggedOut}
            toggleDropdown={toggleDropdown}
            isDropdownOpen={isDropdownOpen}
          />
        ) : (
          <button
            onClick={() => navigate("/user-access")}
            className="px-4 py-2 bg-customBackground text-textPinkColor font-bold rounded transform transition-transform hover:scale-110"
          >
            Área clientes
          </button>
        )}
      </div>

      {/* Menú desplegable con animación 
      
      {/* Links de navegación */}
      <nav
        className={`absolute bg-customBackground top-[91.02px] ml-8 mr-8 rounded-box origin-top transition-all duration-300 ease-in-out transform 
        ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <ul className=" text-xl text-black menu dropdown-content rounded-box z-[1] w-52 p-2 shadow-xl">
          <li>
            <Link to="/home" onClick={toggleMenu} className=" hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Sobre Nosotros
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleMenu}
              className="hover:underline"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/rates" onClick={toggleMenu} className="hover:underline">
              Tarifas
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderMobile;
