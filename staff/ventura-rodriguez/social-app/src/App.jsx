import React from "react";
import {
  Landing,
  Login,
  Signup,
  Page404,
  Home,
  Profile,
  ProfileEdit,
} from "./pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { ModalContext, RoleContext } from "./context";

function App() {
  return (
    <RoleContext.Provider>
      <ModalContext.Provider>
        <main className="App">
          <Routes>
            <Route
              path="/"
              element={<Landing role="visitor" redirectPath="/home" />}
            />
            <Route
              path="/login"
              element={<Login role="visitor" redirectPath="/home" />}
            />
            <Route
              path="/sign-up"
              element={<Signup role="visitor" redirectPath="/home" />}
            />
            <Route
              path="/home"
              element={<Home role="user" redirectPath="/login" />}
            />
            <Route
              path="/profile"
              element={<Profile role="user" redirectPath="/login" />}
            />
            <Route
              path="/profile.edit"
              element={<ProfileEdit role="user" redirectPath="/login" />}
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
    </RoleContext.Provider>
  );
}

export default App;
