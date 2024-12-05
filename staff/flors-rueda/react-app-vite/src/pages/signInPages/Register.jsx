import { Link } from "react-router"

function Register() {
    return <div><h1>Register</h1>
        <Link to={'/login'}>To Login</Link>
        <Link to={'/my-profile'}>To Profile</Link>
    </div>

}

export default Register