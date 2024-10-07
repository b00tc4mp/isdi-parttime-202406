import { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <section className="relative w-full h-full min-h-screen flex flex-col justify-center items-center bg-white">
        {/* SVG con la ola */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFC0CB" /* Color rosa para la mitad de la pantalla */
            d="M0,288L48,266.7C96,245,192,203,288,170.7C384,139,480,117,576,101.3C672,85,768,75,864,101.3C960,128,1056,192,1152,218.7C1248,245,1344,235,1392,229.3L1440,224V320H0Z"
          />
        </svg>

        {/* Contenido principal */}
        <div className="text-center z-10 mb-9">
          <h1 className="text-3xl text-black">Welcome to MySocialApp</h1>
          <h2 className="text-right text-gray">Made by pet lovers</h2>
        </div>
        <div className="flex space-x-4 z-10">
          <Link
            to="/sign-up"
            target="_self"
            rel="next"
            className="btn btn-primary btn-md bg-pink-500 border-pink-900 hover:border-pink-900 hover:bg-pink-700"
          >
            Ir al formulario de registro
          </Link>
          <Link
            to="/login"
            target="_self"
            rel="next"
            className="btn btn-secondary btn-md bg-pink-300 border-pink-900 hover:border-pink-900 hover:bg-pink-600"
          >
            Ir al formulario de entrada
          </Link>
        </div>
        <p className="absolute bottom-2 text-xs text-gray-500 z-10">
          By CarlosLemonCode
        </p>
      </section>
    );
  }
}

export default Landing;
