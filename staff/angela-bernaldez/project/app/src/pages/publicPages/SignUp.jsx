import { Link } from "react-router"
import SignUpForm from "../../components/Forms/SignUpForm"

function SignUp() {
    return (
      <section className="w-screen h-screen relative flex items-center justify-between px-16">
        <div className="absolute inset-0 w-full h-full shadow-box z-0"></div>
  
        {/* Logo y texto a la izquierda */}
        <div className="w-1/2 text-left px-8 z-10 flex flex-col justify-center">
          <div className="absolute top-6 left-8 -mb-4 h-96 w-96">
            <img
              src="/logo1.svg"
              alt="Logo"
              className="animate-bounce-smooth"
            />
          </div>
  
          <div className="mt-8">
            <h1 className="text-3xl font-semibold mb-6 text-gray-800">Welcome to Nimbux</h1>
  
            <p className="text-gray-600 mb-4">
              Create your account to access Nimbux's weather dashboard. Easily track weather for any location and get a full forecast.
            </p>
  
            <p className="text-gray-600 mb-4">
              Sign up now and start exploring the <b>temperature</b>, <b>precipitation</b>, and <b>wind</b> conditions for your location!
            </p>
  
            <p className="text-gray-600 mb-6">
              With Nimbux, you can plan your week confidently with detailed weather information at your fingertips.
            </p>
          </div>
        </div>
  
        {/* Formulario SignUp a la derecha */}
        <div className="w-1/2 flex justify-center items-center z-10">
          <SignUpForm />
        </div>
      </section>
    )
  }

export default SignUp