import React from "react";
import { Landing, LogIn, SignUp, Page404, Home } from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { ModalContext } from "./context";
import { useUpdate } from "react-use";

function App() {
  const update = useUpdate();
  const isLogged = Boolean(sessionStorage.getItem("token"));

  return (
    <ModalContext.Provider>
      <main className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LogIn updateFather={update} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/home"
            element={<Home isLogged={isLogged} redirectPath="/login" />}
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
