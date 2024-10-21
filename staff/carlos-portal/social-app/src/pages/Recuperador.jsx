import { Component  }   from "react";
import { Link } from "react-router-dom";
import  {Header,Footer,} from  "../components"  


class Recuperador extends Component {

    render (){
        return(
            <>
                <Header/>

               
                <div className="flex flex-col items-center p-8 bg-indigo-900 rounded-lg shadow-md">
  <h1 className="text-5xl font-extrabold text-black text-left mb-8 font-poppins">
    Encuentra tu cuenta
  </h1>
  <p className=" text-lg text-white-300 text-left max-w-xl">
    
    Por favor introduce tu email,o teléfono móvil para que podamos enviarte tu contraseña.
  </p>

             <form className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                 <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                 htmlFor="inline-full-name">
          @
                </label>
                </div>
                <div className="md:w-2/3">
                 <input
                 className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                 id="email"
                 type="email"
                 placeholder="Introduce tu email"
                 />
                             </div>
                         </div>
                    </form>
                </div>

            
                <div className="flex justify-center items-center h-screen w-screen">
                    
                </div>
                <Footer/>
            </>



            
                
        )
    }

}

export default Recuperador