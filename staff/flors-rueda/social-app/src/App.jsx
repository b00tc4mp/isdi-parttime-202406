import React, { useEffect } from "react";
import { Landing, Login, Signup, Page404, Home, ProfileSettings, NewPost } from "./pages";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ModalContext } from "./context";
import { useUpdate } from "react-use";
import logic from "./logic";
import { Footer, Header } from "./components";
import Profile from "./pages/Profile";

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
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/not-found" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
        {(logic.isUserLoggedIn() && location.pathname !== '/new-post') &&
          <button
            onClick={() => navigate('/new-post')}
            className="text-5xl fixed bottom-14 right-0 btn btn-ghost hover:btn-neutral">+</button>
        }
        {logic.isUserLoggedIn() && <Footer />}
      </main>

    </ModalContext.Provider>
  );
}

export default App;
