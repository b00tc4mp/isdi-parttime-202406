import { Footer, Header, LogInForm } from "../components";
import { useModalError } from "../context/ModalContext";
import userAuth from "../logic/userAuth";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();
  const openModalError = useModalError();

  const onSubmit = ({ email, password }) => {
    try {
      return userAuth(email, password) //
        .then((token) => {
          sessionStorage.setItem("token", token);
          navigate("/home");
        })
        .catch((err) => {
          openModalError(err);
        });
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Header />
      <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <LogInForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default LogIn;