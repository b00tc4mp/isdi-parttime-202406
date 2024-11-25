import React, { useEffect } from "react"
import { Landing, Login, Signup, Page404, Home, ProfileSettings } from "./pages"
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
import { ModalContext } from "./context"
import { Footer, Header } from "./components"


function App() {
  const update = useUpdate()
  const location = useLocation()

  useEffect(() => {}, [location.pathname])

  return (
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
            element={<Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route
            path="/settings"
            element={<ProfileSettings isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route path="/not-found" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
      {logic.isUserLoggedIn() && <Footer />}
    </ModalContext.Provider>
  );
}

export default App;