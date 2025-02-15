import { useMemo, useState, useEffect } from "react";
import { LoginForm } from "../../components";
import userAuth from "../../logic/userAuth";
import { useNavigate } from "react-router-dom";

function Login({ onUserLoggedIn }) {
  const [headerHeight, setHeaderHeight] = useState(91.01); // Altura por defecto (versión móvil)

  useEffect(() => {
    const updateHeight = () => {
      // Detecta si la pantalla es >= lg (1024px)
      if (window.innerWidth >= 1024) {
        setHeaderHeight(122); // Header grande
      } else {
        setHeaderHeight(91.01); // Header móvil
      }
    };
    // Ejecutar al cargar
    updateHeight();

    // Escuchar cambios de tamaño de pantalla
    window.addEventListener("resize", updateHeight);

    // Limpiar el event listener al desmontar
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const navigate = useNavigate();

  const onSubmit = useMemo(
    () =>
      ({ email, password }) => {
        try {
          return userAuth(email, password).then(() => {
            // Avisar a la app que ha habido un cambio en el token
            onUserLoggedIn();
            navigate("/home");
          });
        } catch (error) {
          throw error;
        }
      },
    [navigate]
  );

  return (
    <>
      <section
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
        className="w-screen  sm:py-10"
      >
        <LoginForm className="mx-auto " onSubmit={onSubmit} />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
