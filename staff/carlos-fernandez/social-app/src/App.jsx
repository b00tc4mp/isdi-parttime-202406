import React from "react";
import { Landing, Login, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
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
