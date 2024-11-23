import { useMemo } from "react";
import { Footer, Header, LoginForm } from "../components";
import { useModalError } from "../context/ModalContext";
import userAuth from "../logic/userAuth";
import { useNavigate } from "react-router-dom";

function Login({ updateFather }) {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmit = useMemo(
    () =>
      ({ email, password }) => {
        try {
          return userAuth(email, password)
            .then(() => {
              updateFather();
              navigate("/home");
            })
            .catch((err) => {
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
      <Header />
      <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <LoginForm
          className="shadow-box mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
