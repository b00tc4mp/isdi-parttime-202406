import { Component } from "react";
import { Footer, Header, LoginForm } from "../components";
import userAuth from "../logic/userAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const onSubmit = ({ email, password }) => {
    return userAuth(email, password).then((token) => {
      sessionStorage.setItem("token", token);
      navigate("/home");
    });
  };
  return (
    <>
      <Header />
      <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
        <LoginForm
          className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
          onSubmit={onSubmit}
        />
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
