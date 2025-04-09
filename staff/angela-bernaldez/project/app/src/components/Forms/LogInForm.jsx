import { IconEmail, IconPassword } from '../icons/icons.jsx'
import { useNavigate, Link } from 'react-router-dom'
import logic from '../../logic/index.js'
import { useState } from 'react'
import FormErrorsSection from './FormErrorsSection.jsx'
import { Errors } from 'common'


function LogInForm({ onUserLoggedIn }) {
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const sendLogInForm = (event) => {
    event.preventDefault()

    const { email, password } = event.target

    logic.authenticateUser(email.value, password.value)
      .then(() => {
        navigate('/dashboard')
        onUserLoggedIn()
      })
      .catch((error) => {
        if (error instanceof Errors.PasswordNotValidError) 
          return setErrors([new Errors.PasswordNotValidError()])
        if (error instanceof Errors.CredentialsError) 
          return setErrors([new Errors.CredentialsError()])
        if (error instanceof Errors.BadRequestError)
          return setErrors([new Errors.CredentialsError()])
        if (error instanceof Errors.ServerError) 
          return setErrors([new Errors.ServerError()])
        setErrors([new Errors.UnexpectedError()])
      })
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary-100 to-primary-200">
      <div className="bg-white max-w-lg w-full px-12 py-10 rounded-xl shadow-2xl">
  
        <h1 className="text-4xl font-semibold text-center text-primary-900 mb-8">Log In</h1>
  
        <form onSubmit={sendLogInForm} className="w-full">
          {/* Email Field */}
          <div className="flex flex-col mb-4 text-xs relative">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base rounded-xl transition-all duration-500 ease-in-out"
            />
            <IconEmail fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" />
          </div>
  
          {/* Password Field */}
          <div className="flex flex-col mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base rounded-xl transition-all duration-500 ease-in-out"
            />
            <IconPassword fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" />
          </div>
  
          {/* Forgot Password Link */}
          <div className="mb-6 text-xs text-primary-800 text-right">
            <Link
              to="/recovery-password"
              className="link link-secondary hover:text-primary-600 transition-all duration-300"
            >
              Forgot password?
            </Link>
          </div>
  
          {errors && <FormErrorsSection errors={errors} className="mb-5" />}
  
          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-secondary btn-block text-base text-white bg-primary-600 hover:bg-primary-700 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              Log In
            </button>
          </div>
  
          {/* Sign Up Link */}
          <div className="mt-6 text-xs text-primary-800 text-center">
            <Link
              to="/signup"
              className="link link-secondary hover:text-primary-600 transition-all duration-300"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  )  
}

export default LogInForm
