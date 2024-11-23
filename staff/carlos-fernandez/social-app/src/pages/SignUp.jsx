import { useMemo } from "react";
import { Footer, Header, SignupForm } from "../components";
import { useModalError } from "../context/ModalContext";
import registerUser from "../logic/registerUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmit = useMemo(
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
      <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:py-16 max-xs:pt-16 overflow-y-auto">
        <SignupForm className=" shadow-box mx-auto" onSubmit={onSubmit} />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default SignUp;
