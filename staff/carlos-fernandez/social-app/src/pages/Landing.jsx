import { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid">
        <div className="place-self-center w-fit">
          <div className="w-fit mx-auto mb-9">
            <h1 className="text-3xl">Wellcome to MySocialApp</h1>
            <h2 className="text-red-700"> By CarlosLemonCode</h2>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <button className="btn btn-primary btn-md">
              Ir al formulario de registro
            </button>
            <button className="btn btn-secondary btn-md">
              Ir al formulario de entrada
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
