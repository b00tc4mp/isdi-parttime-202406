import { useNavigate } from "react-router";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import logic from "../../logic";
import ConfirmationModal from "../modals/ConfirmationModal";

export function UserAreaBtn({
  onUserLoggedOut,
  toggleDropdown,
  isDropdownOpen,
}) {
  const [username, setUsername] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    logic
      .getUsername()
      .then((name) => setUsername(name))
      .catch((error) => {
        console.error("Error fetching username:", error.message);
        setUsername(null);
      });
  }, []);

  const handleLogout = async () => {
    const result = await ConfirmationModal({});

    if (result.isConfirmed) {
      onUserLoggedOut();
      sessionStorage.clear();
      navigate("/home");
    }
  };

  return (
    <div className="navbar bg-headerColor rounded-box">
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end relative">
            <button
              className="btn btn-ghost rounded-btn text-black text-xl"
              onClick={toggleDropdown}
            >
              {/* Si tarda en cargar el nombre, ver sólo "bienvenido" */}
              Bienvenid@, {username}
            </button>

            <ul
              className={`absolute right-0 text-xl text-black menu bg-customBackground rounded-box z-[1] mt-4 w-52 p-2 shadow-lg origin-top transition-all duration-300 ease-in-out transform
              ${
                isDropdownOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/my-profile"
                  onClick={toggleDropdown}
                  className="block px-4 py-2 "
                >
                  Mi perfil
                </Link>
              </li>
              <li>
                <Link
                  to="/my-pets"
                  onClick={toggleDropdown}
                  className="block px-4 py-2"
                >
                  Mis mascotas
                </Link>
              </li>
              <li>
                <Link
                  to="/my-reservations"
                  onClick={toggleDropdown}
                  className="block px-4 py-2"
                >
                  Mis reservas
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleDropdown();
                  }}
                >
                  Salir
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAreaBtn;
