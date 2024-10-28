import { Footer, Header, SignupForm } from "../components";
import registerUser from "../logic/registerUser";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    return registerUser(data) //
      .then(() => {
        navigate("/login");
      });
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
    </>
  );
}

export default SignUp;
