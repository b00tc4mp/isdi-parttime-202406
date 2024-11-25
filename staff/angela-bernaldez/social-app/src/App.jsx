import React from "react"
import logic from "./logic"
import {
  Landing,
  LogIn,
  SignUp,
  Page404,
  Home,
  Profile,
  ProfileEdit,
} from "./pages"
import { Route, Routes, Navigate } from "react-router-dom"
import { ModalContext } from "./context"

function App() {
  const update = useUpdate()

  return (
    <ModalContext.Provider>
      <main className="App">
        <Routes>
          <Route
            path="/"
            element={<Landing role="visitor" redirectPath="/home" />}
          />
          <Route
            path="/login"
            element={<LogIn role="visitor" redirectPath="/home" />}
          />
          <Route
            path="/sign-up"
            element={<SignUp role="visitor" redirectPath="/home" />}
          />
          <Route
            path="/home"
            element={<Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route path="/not-found" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        {/* 
      - Feed
      - Create content
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