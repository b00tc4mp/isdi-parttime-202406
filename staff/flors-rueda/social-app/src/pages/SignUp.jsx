import { useMemo } from "react";
import { Footer, Header, SignupForm } from "../components";
import { useModalError } from "../context/ModalContext";
import registerUser from "../logic/registerUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmit = useMemo( //preguntar a ventu ¿por qué?
    () => (data) => {
      try {
        return registerUser(data)
          .then(() => {
            navigate("/login");
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
        <SignupForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default SignUp;
