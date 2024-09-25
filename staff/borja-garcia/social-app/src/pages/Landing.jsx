import { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid">
        <div className="place-self-center w-fit">
          <div className="w-fit mx-auto mb-9">
            <h1 className="text-3xl">Bienvenido a mi Social App</h1>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Link
              to="/sign-up"
              target="_self"
              rel="next"
              className="btn btn-primary btn-md"
            >
              Regístrate
            </Link>
            <Link
              to="/login"
              target="_self"
              rel="next"
              className="btn btn-secondary btn-md"
            >
              Inicia Sesión
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;