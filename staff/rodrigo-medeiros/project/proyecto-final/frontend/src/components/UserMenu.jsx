import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconLogin } from './icons';
import { logout } from '../logic/logout';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside, true);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn bg-yellow-500 flex items-center space-x-2"
      >
        <IconLogin className="h-5 w-5" />
        <span>My Menu</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
          <Link
            to="../pages/MyProfile"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>
          <Link
            to="../pages/MyFavouriteRoutes"
            className="block px-4 py-2 hover:bg-gray-200"
            onClick={() => setIsOpen(false)}
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
  );
};

export default UserMenu;

