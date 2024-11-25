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
      <main className="h-fit min-h-full">
        {logic.isUserLoggedIn() && <Header />}
        <Routes>
          <Route
              path="/" 
              element={logic.isUserLoggedIn() ? <Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" /> : <Landing />} 
            />
          <Route 
            path="/login" 
            element={<Login updateFather={update} />} />
          <Route 
            path="/sign-up" 
            element={<Signup />} />
          <Route
            path="/home"
            element={<Home isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route
            path="/settings"
            element={<ProfileSettings isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route 
            path="/not-found" 
            element={<Page404 />} />
          <Route 
            path="*" 
            element={<Navigate to="/not-found" />} 
          />
        </Routes>
      </main>
      {logic.isUserLoggedIn() && <Footer />}
    </ModalContext.Provider>
  );
}

export default App;