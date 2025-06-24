// src/components/HeaderContainer.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // ⬅️ usa o contexto
import HeaderPresentation from "./HeaderPresentation.jsx";

const HeaderContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // ⬅️ novo

  // Fecha menu ao clicar fora
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => document.removeEventListener("click", handleClickOutside, true);
  }, [menuOpen]);

  // Callbacks delegados
  const onToggleMenu = () => setMenuOpen(open => !open);
  const onCloseMenu = () => setMenuOpen(false);
  const onLogout = () => {
    logout(); // agora centralizado via contexto
    setMenuOpen(false);
  };
  const onNavigateHome = () => navigate("/");
  const onNavigateFlights = () => navigate("/");
  const onNavigateSignin = () => navigate("/signin");

  return (
    <div ref={menuRef}>
      <HeaderPresentation
        isLoggedIn={isLoggedIn}
        menuOpen={menuOpen}
        onToggleMenu={onToggleMenu}
        onCloseMenu={onCloseMenu}
        onLogout={onLogout}
        onNavigateHome={onNavigateHome}
        onNavigateFlights={onNavigateFlights}
        onNavigateSignin={onNavigateSignin}
      />
    </div>
  );
};

export default HeaderContainer;

