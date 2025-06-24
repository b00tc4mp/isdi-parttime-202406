// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout as logoutFn } from "../logic/logout.js";
import { login as loginFn } from "../logic/login.js";
import { isUserLoggedIn } from "../logic/isUserLoggedIn.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn());

  useEffect(() => {
    const check = isUserLoggedIn();
    setIsLoggedIn(check);
  }, []);

  const login = async (email, password) => {
    const result = await loginFn(email, password);
    if (result.success) {
      setIsLoggedIn(true); // <-- Atualiza o contexto
      navigate("/");       // Redireciona após login
    }
    return result;
  };

  const logout = () => {
    logoutFn();
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

