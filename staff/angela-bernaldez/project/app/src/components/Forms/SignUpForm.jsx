import { IconEmail, IconUser, IconPassword } from '../icons/icons.jsx'
import logic from '../../logic'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import FormErrorsSection from './FormErrorsSection.jsx'
import { Errors } from 'common'

function SignUpForm() {
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const sendSignUpForm = (event) => {
    event.preventDefault()

    const { username, email, password, repeatPassword } = event.target

    try {
      logic.registerUser(username.value, email.value, password.value, repeatPassword.value)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        if (error instanceof Errors.BadRequestError) 
          return setErrors([new Errors.BadRequestError()])
        if (error instanceof Errors.ServerError) 
          return setErrors([new Errors.ServerError()])
        if (error instanceof Errors.DuplicityError) 
          return setErrors([new Errors.DuplicityError()])
        if (error instanceof Errors.ConfirmationError) 
          return setErrors([new Errors.ConfirmationError()])
        if (error instanceof Errors.CredentialsError)
          return setErrors([new Errors.CredentialsError()])
        if (error instanceof Errors.DuplicityError) 
          return setErrors([new Errors.DuplicityError()])
        setErrors([new Errors.UnexpectedError()])
      })
    } catch (error) {
      console.log('Error capturado en el try/catch:', error) 
      setErrors([error])
    }
  }

  return (
    <div 
      className=
        "flex justify-center items-center min-h-screen bg-primary-100"
    >
      <div className="bg-white max-w-lg w-full px-12 py-10 rounded-xl shadow-xl"> 
        <h1 className="text-4xl font-bold text-center text-primary-900 mb-10">Sign Up</h1> 

        <form onSubmit={sendSignUpForm} className="w-full">
          {/* Email Field */}
          <div className="flex flex-col mb-4 relative">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base" 
            />
            <IconEmail fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" /> 
          </div>

          {/* Username Field */}
          <div className="flex flex-col mb-4 relative">
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base"
            />
            <IconUser fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" />
          </div>

          {/* Password Field */}
          <div className="flex flex-col mb-4 relative">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base"
            />
            <IconPassword fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" />
          </div>

          {/* Confirm Password Field */}
          <div className="flex flex-col mb-4 relative">
            <input
              type="password"
              id="repeatPassword"
              placeholder="Confirm your password"
              className="input input-bordered input-ghost w-full focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder:text-gray-500 pl-12 py-3 text-base"
            />
            <IconPassword fill="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-7 h-7 opacity-60" />
          </div>

          {errors && <FormErrorsSection errors={errors} className="mb-5" />}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="btn btn-secondary btn-block text-base text-white bg-primary-600 hover:bg-primary-700 py-3"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-xs text-primary-800 text-center">
            <Link
              to="/login"
              className="link link-secondary hover:text-primary-500"
            >
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
