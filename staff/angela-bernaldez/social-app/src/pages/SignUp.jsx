import {Header, SignUpForm } from "../components";
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
      <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:pt-20 max-xs:pt-16 overflow-y-auto">
        <SignUpForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default SignUp;