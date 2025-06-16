import React, { useEffect } from "react";
import { Landing, Login, Signup, Page404, Home, ProfileSettings, NewPost, WorldPosts, Profile } from "./pages";
import { Route, Routes, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ModalContext } from "./context";
import { useUpdate } from "react-use";
import logic from "./logic";
import { Footer, Header } from "./components";
import ProfileSecurity from "./pages/ProfileSecurity";

function App() {
  const update = useUpdate();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  }, [location.pathname])

  /*
  TODO:
  - componetizar navbar
  - limpiar app --> segundo routes en <Home />
  - vistas de publicaciones:
  -- Home --> mias + seguir
  -- Global --> todos los users
  -- Perfil --> las de ese user que tienes permiso para ver
  - Crear vista perfil 
  - Añadir editar-eliminar posts a menu propio
  - Hook useRef en dialogs
  - Feedback de errores en formulario
  - Fallo si no se pasan fotos al crear un post?
  - Barra de búsqueda de users?? Vista de todos los users
  
  */

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
            path="/world"
            element={<WorldPosts isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route
            path="/settings"
            element={<ProfileSettings isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
          />
          <Route
            path="/security"
            element={<ProfileSecurity isLogged={logic.isUserLoggedIn()} redirectPath="/login" />}
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
