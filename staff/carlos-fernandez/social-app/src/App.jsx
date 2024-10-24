import React from "react";
import { Landing, LogIn, SignUp, SignOut, Page404, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-found" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
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
