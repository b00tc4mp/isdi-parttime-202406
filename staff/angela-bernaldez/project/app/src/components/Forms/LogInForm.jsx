import { IconEmail, 
         IconHidePassword,
         IconLogIn,
         IconPassword,
         IconShowPassword } from '../icons/icons.jsx'
// import { Errors } from 'common'
// import { FormErrorsSection } from '../index.jsx'
import { useNavigate } from 'react-router-dom'
import logic from '../../logic/index.js'

// Replace ES locales with corresponding text.

function LogInForm({ onUserLoggedIn }) {

    const navigate = useNavigate()

    const sendLogInForm = (event) => {
        event.preventDefault()

        const { email, password } = event.target

        debugger

        try {
            logic.authenticateUser(email.value, password.value)
                .then(() => {
                    navigate('/');
                    onUserLoggedIn()
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form onSubmit={sendLogInForm}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="******" id="password"></input>
        <button type="submit">Send</button>
    </form>

}

export default LogInForm