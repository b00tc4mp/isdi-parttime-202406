import React from "react";
import { Landing, Login, SignUp } from "./pages";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
       </Routes>
      </BrowserRouter>
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