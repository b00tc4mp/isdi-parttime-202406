import { Link } from "react-router"
import RegisterForm from "../../components/Forms/RegisterForm"

function Register({ onUserLoggedIn }) {
    return <div className="flex flex-col gap-3 items-center">
        <h1 className="pb-1 text-5xl">Register</h1>
        <RegisterForm onUserLoggedIn={onUserLoggedIn} />
        <p>You already have an account? <Link to={'/login'}>Sign In</Link></p>
    </div>
}

export default Register