import { useLocation } from 'react-router-dom'
import LocationSearchBox from './LocationSearchBox'

function Header({ setStamp }) {
    const location = useLocation()

    return (
        <header className="sticky top-0 bg-white shadow-md p-4 z-50">
            <div className="max-w-screen-lg w-full flex justify-start items-center">
                <h1 className="text-xl font-bold text-gray-800 pl-6">
                    🌤️ Weather App
                </h1>

                {location.pathname === '/dashboard' ? (
                    <div className="ml-auto w-[50%]">
                        <LocationSearchBox setStamp={setStamp}/>
                    </div>
                ) : null}
            </div>
        </header>
    )
}



export default Header