import { useMemo } from "react";
import { Footer, Header, LoginForm } from "../components";
import { useModalError } from "../context/ModalContext";
import userAuth from "../logic/userAuth";
import { useNavigate } from "react-router-dom";
import { useRole } from "../context/RoleContext";
import { withPermissions } from "../hocs";

function Login() {
  const navigate = useNavigate();
  const openModalError = useModalError();
  const { refreshRole } = useRole();

  const onSubmit = useMemo(
    () =>
      ({ email, password }) => {
        try {
          return userAuth(email, password) //
            .then((token) => {
              sessionStorage.setItem("token", token);
              refreshRole();
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
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default withPermissions(Login);
