import { Component } from "react";
import { Footer, Header, LoginForm } from "../components";
import userAuth from "../logic/userAuth";

class Login extends Component {
  onSubmit({ email, password }) {
    try {
      userAuth(email, password);
    } catch (err) {
      console.error(err);
    }

    // respuesta del logic
    // si el auth no sale bien avisa al compo LoginForm para que lance errores
    // si el auth sale bien redirige al usuario a la home
  }

  render() {
    return (
      <>
        <Header />
        <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
          <LoginForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={this.onSubmit}
          />
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Login;
