import { useMemo, useState, useEffect } from "react";
import { LoginForm } from "../../components";
import userAuth from "../../logic/userAuth";
import { useNavigate } from "react-router-dom";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";

function Login({ onUserLoggedIn }) {
  const headerHeight = useHeaderHeight();

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
        className="w-screen flex items-center justify-center sm:py-10"
      >
        <LoginForm className="mx-auto " onSubmit={onSubmit} />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
