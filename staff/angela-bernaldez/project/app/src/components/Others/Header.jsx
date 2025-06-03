import { useLocation } from 'react-router-dom'
import LocationSearchBox from './LocationSearchBox'
import UserButton from '../Buttons/UserButton'
import LogOutButton from '../Buttons/LogOutButton'

function Header({ setStamp, onUserLoggedOut }) {
    const location = useLocation()

    return (
        <header className="sticky top-0 shadow-md p-4 z-50">
            <div className="w-full flex items-center gap-20 px-6">

                <img 
                    src="/logo1.svg" 
                    alt="Logo" 
                    className="h-56 w-56 -ml-4 -m-20" 
                />

                <UserButton />

                {location.pathname === '/dashboard' && (
                    <div className="w-full max-w-[400px] mr-4"> 
                        <LocationSearchBox setStamp={setStamp} />
                    </div>
                )}

                <div className="ml-auto w-auto flex-shrink-0">
                    <LogOutButton onUserLoggedOut={onUserLoggedOut} />
                </div>
            </div>
        </header>
    )
}

export default Header