// src/components/HeaderPresentation.jsx
import React from "react";
import { Link } from "react-router-dom";
import { IconLogin, IconFlights, IconLogo } from "../icons";

const HeaderPresentation = ({
  isLoggedIn,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onLogout,
  onNavigateHome,
  onNavigateFlights,
  onNavigateSignin,
}) => (
  <header className="fixed top-0 left-0 w-full p-4 bg-blue-900 text-white z-50">
    <div className="flex justify-between items-center">
      {/* Logo e texto clicáveis */}
      <Link to="/" onClick={onNavigateHome} className="flex items-center space-x-2">
        <IconLogo className="h-6 w-6 text-yellow-500" />
        <span className="font-bold">RotaTour</span>
        <span className="italic font-extrabold text-yellow-500">fly easy!</span>
      </Link>

      <div className="flex space-x-8">
        <button
          onClick={onNavigateFlights}
          className="btn bg-yellow-500 flex items-center space-x-2"
        >
          <IconFlights className="h-5 w-5" />
          <span>Flights</span>
        </button>

        {isLoggedIn ? (
          <div className="relative">
            <button
              onClick={onToggleMenu}
              className="btn bg-yellow-500 flex items-center space-x-2"
            >
              <IconLogin className="h-5 w-5" />
              <span>My Menu</span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-blue-200 text-blue-900 rounded-md shadow-lg">
                <Link
                  to="/myProfile"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={onCloseMenu}
                >
                  My Profile
                </Link>
                <Link
                  to="/myFavouriteRoutes"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={onCloseMenu}
                >
                  My Favourite Routes
                </Link>
                <button
                  onClick={() => { onLogout(); onCloseMenu(); }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={onNavigateSignin}
            className="btn bg-yellow-500 flex items-center space-x-2"
          >
            <IconLogin className="h-5 w-5" />
            <span>Enter</span>
          </button>
        )}
      </div>
    </div>
  </header>
);

export default HeaderPresentation;
