import { useContext } from "react";
import {Header, SignUpForm } from "../components";
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
      <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:pt-20 max-xs:pt-16 overflow-y-auto">
        <SignUpForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      <div className="fixed bottom-5 left-5 z-50">
      <button
        className="btn"
        onClick={() => {
          //
          onSubmit({});
        }}
      >
        open modal
      </button>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default SignUp;