// App.jsx
import React from "react";
import { AlertProvider } from "./context/AlertContext";
import { AuthProvider } from "./context/AuthContext"; // ⬅️ importar o novo contexto
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </AlertProvider>
  );
}

export default App;
