import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../logic/logout.js";
import UserMenuPresentation from "./UserMenuPresentation.jsx";

const UserMenuContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const onToggle = () => setIsOpen(open => !open);
  const onClose = () => setIsOpen(false);

  const onLogout = () => {
    logout();
    navigate("/signin");
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener("click", handleClickOutside, true);
  }, [isOpen]);

  return (
    <UserMenuPresentation
      isOpen={isOpen}
      menuRef={menuRef}
      onToggle={onToggle}
      onClose={onClose}
      onLogout={onLogout}
    />
  );
};

export default UserMenuContainer;
