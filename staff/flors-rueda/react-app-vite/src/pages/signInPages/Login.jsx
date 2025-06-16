import { Link } from "react-router"
import LoginForm from "../../components/Forms/LoginForm"

function Login({ onUserLoggedIn }) {
    return <div className="flex flex-col gap-3 items-center">
        <h1 className="pb-1 text-5xl">Login</h1>
        <LoginForm onUserLoggedIn={onUserLoggedIn} />
        <p>New here? <Link to={'/register'}>Create an account</Link></p>
    </div>
}

export default Login