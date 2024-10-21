import { Component } from "react";
import { Footer, Header, LogInForm } from "../components";

class LogIn extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:pt-20 max-xs:pt-16">
          <LogInForm
            className="mx-auto"
            onSubmit={(event) => {
              // llamar a la api en busca del usuario con contraseña y correo
              // si el auth no sale bien avisa al compo LoginForm para que lance errores
              // si el auth sale bien redirige al usuario a la home
              console.log(event);
            }}
          />
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default LogIn;