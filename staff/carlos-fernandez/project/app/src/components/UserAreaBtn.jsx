import { useNavigate } from "react-router";
import logic from "../logic";

export function UserAreaBtn() {
  const navigate = useNavigate();
  {
    /** useeffect 
    usestate almacenando nombre de usuario */
  }

  return (
    <div className="navbar bg-headerColor rounded-box">
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn text-black text-xl"
            >
              Bienvenido, X
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-customBackground rounded-box z-[1] mt-4 w-52 p-2 shadow-lg"
            >
              <li>
                <button onClick={() => navigate("/my-profile")}>
                  Mi perfil
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/my-pets")}>
                  Mis mascotas
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/my-reservations")}>
                  Mis reservas
                </button>
              </li>
              <li>
                <button onClick={() => navigate("/home")}>Salir</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAreaBtn;
