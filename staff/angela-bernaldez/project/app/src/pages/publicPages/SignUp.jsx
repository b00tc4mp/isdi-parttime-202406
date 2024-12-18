import { Link } from "react-router"
import SignUpForm from "../../components/Forms/SignUpForm"

function SignUp() {
    return <div><h1>Register</h1>
        <Link to={'/login'}>To Login</Link>
        <SignUpForm  />
        {/*<Link to={'/my-profile'}>To Profile</Link>*/}
    </div>

}

export default SignUp