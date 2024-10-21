import { Component } from "react";
import { Footer, Header, LoginForm } from "../components";

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-col min-h-screen">
          {/* Contenedor principal que asegura altura mínima de la pantalla */}
          <div className="flex-grow flex justify-center items-center">
            {/* Ajuste del tamaño del LoginForm */}
            <LoginForm className="w-full max-w-lg h-96  p-8 rounded-lg shadow-lg" />
          </div>
          {/* Footer siempre al final de la página */}
          <Footer />
        </div>
      </>
    );
  }
}

export default Login;