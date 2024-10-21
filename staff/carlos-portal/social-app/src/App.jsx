import React from "react";
import { Landing, Login, SignUp, Page404, Home, Recuperador, FAQS } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { Footer } from "./components";





function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="App flex-grow">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path = "/recuperador" element={<Recuperador/>} />
        <Route path="/not-found" element={<Page404 />} />
        <Route path = "/FAQS" element={<FAQS/>} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
      {/* 
        - Home
        - Recuperador
        - FAQS
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
    </div>



  );
}

export default App;
