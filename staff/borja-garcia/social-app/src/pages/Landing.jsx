import { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid bg-gradient-to-r from-[#7c7cff] to-[#99ccff]">
        <div className="relative place-self-center rounded-xl w-1/2 h-2/3 bg-pink-300 shadow-2xl">
          <div className="flex flex-col items-center h-1/3 justify-center">
            <h1 className="text-3xl font-bold">Bienvenido a mi Social App</h1>
          
          </div>
          <img
              src="/assets/images/cat.png"
              alt="Gatete tumbado"
              className="w-48 h-48 mx-auto mb-12 object-cover"
            />
          <div className="flex gap-4 justify-center items-center ">
            <Link
              to="/sign-up"
              target="_self"
              rel="next"
              className="btn btn-circle btn-primary w-40 btn-md hover:animate-bounce"
            >
             <p className="font-bold">Regístrate</p> 
            </Link>
            <Link
              to="/login"
              target="_self"
              rel="next"
              className="btn btn-circle btn-secondary btn-md w-40 hover:animate-bounce"
            >
              Inicia Sesión
            </Link>
            <div className="absolute bottom-0 w-full text-center py-2">
            <p className="text-xs text-gray-400 text-pretty">Created by PandaCoding</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;