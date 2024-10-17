import { Component } from "react";
import { Footer, Header, LoginForm } from "../components";
import userAuth from "../logic/userAuth";

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
          <LoginForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={({ email, password }) => {
              userAuth(email, password);

              // respuesta del logic
              // si el auth no sale bien avisa al compo LoginForm para que lance errores
              // si el auth sale bien redirige al usuario a la home
            }}
          />
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Login;
