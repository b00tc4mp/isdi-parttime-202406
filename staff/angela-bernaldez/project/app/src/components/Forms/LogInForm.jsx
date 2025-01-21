import { IconEmail, 
         IconHidePassword,
         IconLogIn,
         IconPassword,
         IconShowPassword } from '../icons/icons.jsx'
// import { Errors } from 'common'
// import { FormErrorsSection } from '../index.jsx'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import logic from '../../logic/index.js'

// Replace ES locales with corresponding text.

function LogInForm({ onUserLoggedIn, className }) {

    // podria quitarme classNames y quitarlo de argumento
    // quitar classnames y pasar classname como string dentro (see locationCard ahi esta hecho)

    const navigate = useNavigate()

    const sendLogInForm = (event) => {
        event.preventDefault()

        const { email, password } = event.target

        try {
            logic.authenticateUser(email.value, password.value)
                .then(() => {
                    navigate('/overview')
                    onUserLoggedIn()
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div 
          className={classNames(
            "bg-neutral-800 max-w-screen-sm px-9 py-12", 
            className 
          )}
        >
          <h1 className="text-3xl font-bold text-white mb-8">My Weather App</h1> 
          <form onSubmit={sendLogInForm} className="w-full">
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
                <IconPassword fill="white" />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70"
                />
              </label>
            </div>
            <div className="mt-4"> 
              <button
                type="submit"
                className="btn btn-primary btn-block text-base"
              >
                Send
              </button>
            </div>
            <div className="text-xs xs:flex xs:justify-between">
            <Link
              to="/recovery-password"
              target="_self"
              className="link link-secondary max-xs:block max-xs:mb-4"
            >
              Forgot password?
            </Link>
            <Link
              to="/signup"
              target="_self"
              className="link link-secondary max-xs:block"
            >
              Create an account
            </Link>
          </div>
          </form>
        </div>
      )
}

export default LogInForm