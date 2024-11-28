import React, { useEffect } from "react";
import { Landing, Login, Signup, Page404, Home, ProfileSettings, NewPost } from "./pages";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ModalContext } from "./context";
import { useUpdate } from "react-use";
import logic from "./logic";
import { Footer, Header } from "./components";

function App() {
  const update = useUpdate();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  }, [location.pathname])

  return (
    <ModalContext.Provider>
      <main className="h-fit min-h-screen overflow-hidden">
        {logic.isUserLoggedIn() && <Header />}
        <Routes>
          <Route path="/" element={logic.isUserLoggedIn() ? <Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" /> : <Landing />} />
          <Route path="/login" element={<Login updateFather={update} />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route
            path="/home"
            element={<Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route
            path="/settings"
            element={<ProfileSettings isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route path="/new-post" element={<NewPost />} />
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
        {(logic.isUserLoggedIn() && location.pathname !== '/new-post') &&
          <button
            onClick={() => navigate('/new-post')}
            className="text-5xl text-red-500 border rounded-full px-5 fixed bottom-14 bg-green-500 hover:bg-teal-400 right-0">+</button>
        }
        {logic.isUserLoggedIn() && <Footer />}
      </main>

    </ModalContext.Provider>
  );
}

export default App;
