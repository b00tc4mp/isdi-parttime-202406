import { useMemo } from "react";
import { Header, SignupForm } from "../../components";
import { useNavigate } from "react-router-dom";
import { useModalError } from "../../context/ModalContext";
import registerUser from "../../logic/registerUser";

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
      <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:py-3 max-xs:pt-16 overflow-y-auto">
        <SignupForm onSubmit={onSubmit} />
      </section>
      {/* <Footer /> */}
    </>
  );
}
export default SignUp;
