// App.jsx
import React from "react";
import { AlertProvider } from "./context/AlertContext";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <AlertProvider>
      console.log("🔧 App render - AlertProvider ativo");

      <AppRoutes />
    </AlertProvider>
  );
}

export default App;