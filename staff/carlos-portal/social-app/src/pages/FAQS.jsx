import { Component } from "react";  
import classNames from "classNames";
import { Header,Footer } from "../components";
import { Link } from "react-router-dom";

class FAQS extends Component{
    render() {
        return (
          <>
            <Header />
            <div className="collapse collapse-plus bg-slate-500">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium">Porque no puedo acceder a mi cuenta?</div>
            <div className="collapse-content">
              <p>Porque te has <strong><Link to="/recuperador" className="text-white-500 underline">olvidado la contraseña </Link></strong> por tonto</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-slate-400">
             <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">¿Cuál es la forma orientada a objetos para volverse rico? </div>
            <div className="collapse-content">
               <p>Por Herencia</p>
             </div>
            </div>
            <div className="collapse collapse-plus bg-slate-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Pregunta Secreta</div>
                <div className="collapse-content">
              <p>Respuesta Secreta</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-slate-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Pregunta Secreta</div>
                <div className="collapse-content">
              <p>Respuesta Secreta</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-slate-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Pregunta Secreta</div>
                <div className="collapse-content">
              <p>Respuesta Secreta</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-slate-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">Pregunta Secreta</div>
                <div className="collapse-content">
              <p>Respuesta Secreta</p>
            </div>
            </div>
            <Footer />
          </>
        );
      }
    }
   
export default FAQS;
