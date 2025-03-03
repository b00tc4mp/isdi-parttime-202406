import { useLocation } from 'react-router-dom'
import LocationSearchBox from './LocationSearchBox'
import UserButton from '../Buttons/UserButton'

function Header({ setStamp }) {
    const location = useLocation()

    return (
        <header className="sticky top-0 bg-white shadow-md p-4 z-50">
            <div className="w-full flex items-center gap-4">
                <div className='ml-12'>
                    <UserButton />
                </div>

                {location.pathname === '/dashboard' ? (
                    <div className="ml-auto w-full max-w-[400px]">
                        <LocationSearchBox setStamp={setStamp}/>
                    </div>
                ) : null}
                <div>
                    boton de log out
                </div>
            </div>
        </header>
    )
}

export default Header