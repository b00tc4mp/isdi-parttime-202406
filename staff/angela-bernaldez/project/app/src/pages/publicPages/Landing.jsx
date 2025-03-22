import { Link } from 'react-router-dom'

function Landing() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300 text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Bienvenido a mi Weather App</h1>
        <div className="space-y-4">
          <Link
            to="/signup"
            className="btn btn-secondary btn-md w-full"
          >
            Go to Sign Up Form
          </Link>
          <Link
            to="/login"
            className="btn btn-secondary btn-md w-full"
          >
            Go to Log In Form
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Landing
