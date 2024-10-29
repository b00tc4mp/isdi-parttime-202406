import { useContext } from "react";
import { Footer, Header, SignupForm } from "../components";
import registerUser from "../logic/registerUser";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context";

function SignUp() {
  const navigate = useNavigate();
  const { openErrorModal } = useContext(ModalContext.Context);

  const onSubmit = (data) => {
    try {
      return registerUser(data)
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          //
        });
    } catch (error) {
      openErrorModal({
        title: "hola chicos",
        paragraph: "este es mi mensaje de error",
      });
      return false;
      throw error;
    }
  };

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
      {/*  */}
      <button
        className="btn"
        onClick={() => {
          //
          onSubmit({});
        }}
      >
        open modal
      </button>
    </>
  );
}

export default SignUp;
