import { useNavigate } from "react-router";
import logic from "../../logic";
import useCustomContext from "../../hooks/useCustomContext";

function RegisterForm({ onUserLoggedIn }) {
    const navigate = useNavigate();
    const { alert } = useCustomContext();

    const sendRegisterForm = (event) => {
        event.preventDefault();

        const { email, password, username, date, confirmPassword } = event.target

        const user = {
            username: username.value,
            dateOfBirth: new Date(date.value).toLocaleDateString('en-US'),
            email: email.value,
            password: password.value,
            repeatPassword: confirmPassword.value
        }

        try {
            logic.registerUser(user)
                .then(() => {
                    logic.userAuth(email.value, password.value)
                        .then(() => {
                            navigate('/');
                            onUserLoggedIn();
                        })
                        .catch((error) => alert(error.message))
                })
        } catch (error) {
            alert(error.message)
        }

    }


    return <form onSubmit={sendRegisterForm}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="your username" id="username"></input>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="your email" id="email"></input>
        <label htmlFor="password">Your birthday</label>
        <input type="date" id="date"></input>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="******" id="password"></input>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" placeholder="******" id="confirmPassword"></input>
        <button type="submit">Send</button>
    </form>
}

export default RegisterForm;