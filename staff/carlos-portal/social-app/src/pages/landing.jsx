import React from "react";
import { Link } from "react-router-dom";
import { Header,Footer } from "../components"; 

const Landing = () => {
  return (
    
    <section className="w-full h-full min-w-[100vw] min-h-[150vh] grid bg-gradient-to-r from-orange-300 to-purple-700">
      <Header/>
      <div className="place-self-center w-fit">
        <div className="w-fit mx-auto mb-9">
          <h1 className="text-3xl">Bienvenido a mi Social App</h1>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Link
            to="/sign-up"
            target="_self"
            rel="next"
            className="btn btn-primary btn-md rounded-lg text-white"
          >
            Regístrate
          </Link>
          <Link
            to="/login"
            target="_self"
            rel="next"
            className="btn btn-secondary btn-md rounded-lg text-white"
          >
            Inicia Sesión
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
