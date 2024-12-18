import { Link } from "react-router"
import LogInForm from "../../components/Forms/LogInForm"

function LogIn({ onUserLoggedIn }) {
    return <div className="flex flex-col gap-3 items-center">
        <h1 className="pb-1 text-5xl">Login</h1>
        <LogInForm onUserLoggedIn={onUserLoggedIn} />
        <p>New here? <Link to={'/signup'}>Create an account</Link></p>
    </div>
}

export default LogIn