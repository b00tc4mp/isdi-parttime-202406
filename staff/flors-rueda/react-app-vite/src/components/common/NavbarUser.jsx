import { Link, useNavigate } from "react-router"
import logic from "../../logic"

function NavbarUser({ onUserLoggedOut }) {
    const navigate = useNavigate()
    const onLogout = () => {
        logic.logout();
        navigate('/');
        onUserLoggedOut();
    }

    return <nav className="w-full flex flex-row gap-3 justify-around">
        <div className="flex flex-row gap-3 justify-center w-full">
            <Link to={'/my-profile'}>My Profile</Link>
            <Link to={'/home'}>Home</Link>
        </div>
        <a onClick={onLogout} className="pr-3 cursor-pointer">Logout</a>
    </nav>
}

export default NavbarUser