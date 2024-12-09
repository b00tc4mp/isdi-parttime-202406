import { useMemo } from "react";
import { SignupForm } from "../components";
import { useNavigate } from "react-router-dom";
import { openModalError } from "../context/ModalContext";

function SignUp() {
  const navigate = useNavigate();

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
        <SignupForm onSubmit={onSubmit} />
      </section>
      {/* <Footer /> */}
    </>
  );
}
export default SignUp;
