import { Header, LogInForm } from "../components";
import userAuth from "../logic/userAuth";
import { useNavigate } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    return userAuth(email, password) //
      .then((token) => {
        sessionStorage.setItem("token", token);
        navigate("/home");
      });
  };

  return (
    <>
      <Header />
      <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:pt-20 max-xs:pt-16 overflow-y-auto">
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