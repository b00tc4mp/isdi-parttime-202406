import React, { useEffect } from "react";
import {
  Home,
  Landing,
  LogIn,
  Page404,
  ProfileSettings,
  SignOut,
  SignUp,
} from "./pages";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { ModalContext, RoleContext } from "./context";
import { useUpdate } from "react-use";
import logic from "./logic";
import { Footer, Header } from "./components";

function App() {
  const update = useUpdate();
  const location = useLocation();

  useEffect(() => {}, [location.pathname]);

  return (
    <RoleContext.Provider>
      <ModalContext.Provider>
        <main className="App">
          {logic.isUserLoggedIn() && <Header />}
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
              element={
                <Home isLogged={logic.isUserLoggedIN()} redirectPath="/login" />
              }
            />
            <Route
              path="/settings"
              element={
                <ProfileSettings
                  isLogged={logic.isUserLoggedIn()}
                  redirectPath="/login"
                />
              }
            />
            <Route path="/not-found" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Routes>
          {/*
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
        {logic.isUserLoggedIn() && <Footer />}
      </ModalContext.Provider>
    </RoleContext.Provider>
  );
}

export default App;
