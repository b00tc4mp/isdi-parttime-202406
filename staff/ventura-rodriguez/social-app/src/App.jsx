import React from "react";
import { Landing, Login, Signup, Page404, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/not-found" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {/* 
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
