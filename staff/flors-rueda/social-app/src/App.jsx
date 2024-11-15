import React from "react";
import { Landing, Login, Signup, Page404, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { ModalContext } from "./context";
import { useUpdate } from "react-use";
import logic from "./logic";

function App() {
  const update = useUpdate();

  return (
    <ModalContext.Provider>
      <main className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login updateFather={update} />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/home"
            element={<Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
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
    </ModalContext.Provider>
  );
}

export default App;
