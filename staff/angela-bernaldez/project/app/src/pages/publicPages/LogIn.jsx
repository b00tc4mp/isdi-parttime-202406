import LogInForm from '../../components/Forms/LogInForm'
function LogIn({ onUserLoggedIn }) {
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
              Nimbux is your ultimate weather dashboard. Easily track the weather for any location by adding them to your dashboard.
            </p>
  
            <p className="text-gray-600 mb-4">
              You can view the current <b>temperature</b>, <b>precipitation</b>, and <b>wind</b> conditions, along with important details like <b>sunset</b> and <b>sunrise</b> times, and the total hours of <b>daylight</b>.
            </p>
  
            <p className="text-gray-600 mb-6">
              Stay ahead with a comprehensive weekly forecast, helping you plan your week with confidence.
            </p>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center z-10">
          <LogInForm onUserLoggedIn={onUserLoggedIn} />
        </div>
      </section>
    );
  }
  
  

export default LogIn