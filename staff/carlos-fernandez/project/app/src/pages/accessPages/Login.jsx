import { useMemo } from "react";
import { LoginForm } from "../../components";

import userAuth from "../../logic/userAuth";
import { useNavigate } from "react-router-dom";

function Login({ onUserLoggedIn }) {
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
