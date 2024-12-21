import { useNavigate } from "react-router"
import logic from "../../logic"

function SignUpForm() {
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

    return <form onSubmit={sendSignUpForm}>
        <label htmlFor="username">Username</label>
        <input type="username" placeholder="your nickname" id="username"></input>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="******" id="password"></input>
        <label htmlFor="repeatPassword">Repeat Password</label>
        <input type="repeatPassword" placeholder="******" id="repeatPassword"></input>
        <button type="submit">Send</button>
    </form>
}

export default SignUpForm