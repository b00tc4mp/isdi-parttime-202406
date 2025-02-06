import { useMemo } from "react";
import { LoginForm } from "../../components";
import { useModalError } from "../../context/ModalContext";
import userAuth from "../../logic/userAuth";
import { useNavigate } from "react-router-dom";

function Login({ onUserLoggedIn }) {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmit = useMemo(
    () =>
      ({ email, password }) => {
        try {
          return userAuth(email, password)
            .then(() => {
              // Avisar a la app que ha habido un cambio en el token
              onUserLoggedIn();
              navigate("/home");
            })
            .catch((err) => {
              console.log(err.message); // Manda el mensaje de error a las dev tools
              openModalError(err);
            });
        } catch (error) {
          throw error;
        }
      },
    [navigate, openModalError]
  );

  return (
    <>
      <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <LoginForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
