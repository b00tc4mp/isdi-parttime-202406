import { IconEmail, 
    IconHidePassword,
    IconUser,
    IconPassword,
    IconShowPassword } from '../icons/icons.jsx'
import logic from '../../logic'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'

function SignUpForm({ className }) {
    const navigate = useNavigate()

    const sendSignUpForm = (event) => {
        event.preventDefault()

        const { username, email, password, repeatPassword } = event.target

        try {
            logic.registerUser(username.value, email.value, password.value, repeatPassword.value)
                .then(() => {
                    navigate('/login')
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div 
          className={classNames(
            "bg-neutral-800 w-1/3 h-1/2 mx-auto flex flex-col items-center justify-center", 
            className 
          )}
        >
          <h1 className="text-3xl font-bold text-white mb-8">My Weather App</h1> 
          <form onSubmit={sendSignUpForm} className="w-full">
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="flex items-center gap-2">
                <IconEmail fill="white" />
                <input
                  type="email"
                  id="email"
                  placeholder="your email"
                  className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="flex items-center gap-2">
                <IconUser fill="white" /> 
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="flex items-center gap-2">
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center mb-6">
              <label className="flex items-center gap-2">
                <IconPassword fill="white" /> 
                <input
                  type="password"
                  id="repeatPassword" 
                  placeholder="Confirm Password"
                  className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
            </div>
            <div className="mt-4"> 
              <button
                type="submit"
                className="btn btn-primary btn-block text-base"
              >
                Sign Up
              </button>
            </div>
            <div className="text-xs flex justify-center mb-6">
              <Link to="/login" target="_self" className="link link-secondary">
                Already have an account?
              </Link>
            </div>
          </form>
        </div>
      )
}

export default SignUpForm