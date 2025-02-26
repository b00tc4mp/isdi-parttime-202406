// Header.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IconLogin, IconFlights, IconLogo, IconUsername } from "./icons";
import { isUserLoggedIn } from "../logic/isUserLoggedIn";
import { logout } from "../logic/logout";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-blue-900 text-white z-50">
      <div className="flex justify-between items-center">
        {/* Logo e texto clicáveis */}
        <Link to="/" className="flex items-center space-x-2 cursor-pointer">
          <IconLogo className="h-6 w-6 text-yellow-500" />
          <span className="font-bold">RotaTour</span>
          <span className="italic font-extrabold text-yellow-500">fly easy!</span>
        </Link>
        <div className="flex space-x-8">
          <button className="btn bg-yellow-500 flex items-center space-x-2">
            <IconFlights className="h-5 w-5" /> <span>Flights</span>
          </button>
          {isUserLoggedIn() ? (
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="btn bg-yellow-500 flex items-center space-x-2"
              >
                <IconUsername className="h-5 w-5" /> <span>My Menu</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg">
                  <Link
                    to="/myProfile"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/myFavouriteRoutes"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    My Favourite Routes
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin" className="btn bg-yellow-500 flex items-center space-x-2">
              <IconLogin className="h-5 w-5" /> <span>Enter</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
