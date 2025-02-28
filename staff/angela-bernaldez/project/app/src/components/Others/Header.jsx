import { useLocation } from 'react-router-dom'
import LocationSearchBox from './LocationSearchBox'

function Header({ setStamp }) {
    const location = useLocation()

    return (
        <header className="sticky top-0 bg-white shadow-md p-4 z-50">
            <div className="w-full flex items-center gap-4">
                <h1 className="text-xl font-bold text-gray-800 pl-6">
                    🌤️ Weather App
                </h1>

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