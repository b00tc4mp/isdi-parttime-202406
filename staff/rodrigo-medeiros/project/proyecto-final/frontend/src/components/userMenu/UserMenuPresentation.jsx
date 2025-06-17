import React from "react";
import { Link } from "react-router-dom";
import { IconLogin } from "../icons";

const UserMenuPresentation = ({
  isOpen,
  menuRef,
  onToggle,
  onClose,
  onLogout,
}) => (
  <div className="relative" ref={menuRef}>
    <button
      onClick={onToggle}
      className="btn bg-yellow-500 flex items-center space-x-2"
    >
      <IconLogin className="h-5 w-5" />
      <span>My Menu</span>
    </button>

    {isOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
        <Link
          to="/myProfile"
          className="block px-4 py-2 hover:bg-gray-200"
          onClick={onClose}
        >
          My Profile
        </Link>
        <Link
          to="/myFavouriteRoutes"
          className="block px-4 py-2 hover:bg-gray-200"
          onClick={onClose}
        >
          My Favourite Routes
        </Link>
        <button
          onClick={() => { onLogout(); onClose(); }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Log Out
        </button>
      </div>
    )}
  </div>
);

export default UserMenuPresentation;
