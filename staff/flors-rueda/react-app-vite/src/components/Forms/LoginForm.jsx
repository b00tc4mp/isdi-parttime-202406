import { useNavigate } from "react-router";
import logic from "../../logic";

function LoginForm({ onUserLoggedIn }) {
    const navigate = useNavigate()

    const sendLoginForm = (event) => {
        event.preventDefault();

        const { email, password } = event.target

        try {
            logic.userAuth(email.value, password.value)
                .then(() => {
                    navigate('/');
                    onUserLoggedIn();
                })
                .catch((error) => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }


    return <form onSubmit={sendLoginForm}>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your email" id="email"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="******" id="password"></input>
        <button type="submit">Send</button>
    </form>
}

export default LoginForm;