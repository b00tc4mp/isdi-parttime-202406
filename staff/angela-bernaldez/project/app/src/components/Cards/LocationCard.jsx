import getWeatherIcon from '../../logic-weather/getWeatherIcon'

function LocationCard({ locationData }) {
    return (
        <div className="bg-white cursor-pointer hover:shadow-xl hover:border hover:border-gray-300 flex flex-row max-w-full h-[8rem] shadow-lg rounded-2xl items-center justify-between mb-6 mr-10 p-4">
            {/* Contenedor principal de la información */}
            <div className="flex flex-col w-2/3 pl-4">
                <h1 className="text-xl font-semibold">{locationData.name}</h1>
                <p className="text-gray-600 text-md">{locationData.current.temperature_2m}°C</p>
            </div>

            {/* Icono del clima */}
            <div className="w-28 h-28 flex items-center justify-center mr-4">
                {getWeatherIcon(locationData.current.weather_code)}
            </div>
        </div>
    )
}


export default LocationCard