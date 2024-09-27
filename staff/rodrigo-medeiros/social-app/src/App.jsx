import React from "react";
import { Landing, Login, SignOut, Page404, SignUp } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <main className="App">
      
        <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/page404" element={<Page404 />} />
          <Route path="/sign-out" element={<SignOut />} /> 
          <Route path="*" element={<Navigate to="/Page404" />} />
        </Routes>
      {/* 
        - Landing
        - Login
        - Registro
        - Home
        - Feed
        - Create content
        - Profile (view)
        - Profile (edit)
        - People
        - Explorer
        - Settings
        - Conversations (list)
        - Conversations (only one)
        - Notificacions
      */}
    </main>
  );
}

export default App;