import { Link, useNavigate } from "react-router-dom";
import { IconMenu } from "./icons";
import ES from "../locales/es.json";
import { UserAreaBtn } from "./UserAreaBtn";
//import logic from "../logic";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="sticky top-0 z-10 bg-headerColor">
        <nav className="navbar text-black ">
          {/** */}
          <div className="navbar-start ">
            <img
              src="https://dosrosaspetresort.es/wp-content/uploads/2024/08/cropped-logovertical.png"
              alt="Doo(g)king Logo"
              className=" ml-10 w-auto h-auto max-w-[200px] max-h-[200px]"
            ></img>
            <div className="ml-10 ">
              {/**<UserAreaBtn /> */}

              <button
                onClick={() => navigate("/user-access")}
                className=" px-4 py-2 bg-customBackground text-textPinkColor font-bold rounded transform transition-transform hover:scale-110"
              >
                Área clientes
              </button>
            </div>
          </div>
          <div className="navbar-center">
            <Link
              to="/home"
              target="_self"
              rel="next"
              className="btn btn-ghost text-lg hover:bg-transparent"
            >
              Inicio
            </Link>
            <Link
              to="/about-us"
              target="_self"
              rel="next"
              className="btn btn-ghost text-lg hover:bg-transparent"
            >
              Sobre nosotros
            </Link>
            <Link
              to="/services"
              target="_self"
              rel="next"
              className="btn btn-ghost text-lg hover:bg-transparent"
            >
              Servicios
            </Link>
            <Link
              to="/rates"
              target="_self"
              rel="next"
              className="btn btn-ghost text-lg hover:bg-transparent"
            >
              Tarifas
            </Link>
            <Link
              to="/faq"
              target="_self"
              rel="next"
              className="btn btn-ghost text-lg hover:bg-transparent"
            >
              FAQ
            </Link>
          </div>
          <div className="navbar-end ">
            <Link
              to="/"
              target="_self"
              rel="next"
              className=" mr-16 btn btn-ghost text-lg hover:bg-transparent"
            >
              Doo(g)king
            </Link>
          </div>

          {/* <button className="btn btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button> */}
        </nav>
      </header>
    </>
  );
}

export default Header;

// FALTA SEGUIR CON COMPONENTES
