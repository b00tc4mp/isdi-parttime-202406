import logicWeather from '../../logic-weather'

function LocationBox({ currentLocation }) {
    const currentWeather = currentLocation.current

    return (
        <div className="grid grid-cols-2 h-full w-full p-6 pb-16 bg-white shadow-lg rounded-2xl">
            {/* Left column */}
            <div className="flex flex-col justify-start h-full">
                {/* 📍 Location + General info */}
                <div className="flex flex-col space-y-2 mb-6 mt-8">
                    <div className="text-secondary text-3xl font-bold">📍 {currentLocation.name}</div>
                    <div className="text-gray-500 text-xl font-medium">Weather</div>
                    <div className="text-gray-500 text-lg font-medium">Now</div>
                </div>

                {/* Temperatures */}
                <div className="flex flex-col justify-start space-y-2 mt-16">
                    {/* Current temperature */}
                    <div className="flex space-x-2 text-gray-900 text-5xl font-bold">
                        <span>{currentWeather.temperature_2m} {currentLocation.current_units.temperature_2m}</span>
                    </div>

                    {/* Feels like */}
                    <div className="flex items-center space-x-2 text-gray-500 text-xl font-bold">
                        <span>Feels like {currentWeather.apparent_temperature} {currentLocation.current_units.apparent_temperature}</span>
                    </div>
                </div>
            </div>
            {/* Right column */}
            <div className="flex flex-col justify-between h-full max-h-full overflow-hidden">
                {/* Weather icon */}
                <div className="flex justify-center items-center">
                    <div className="overflow-hidden w-64 h-64 -mt-8">
                        {logicWeather.getWeatherIcon(currentWeather.weather_code, currentWeather.is_day)}
                    </div>
                </div>
            {/* Oher variables */}
                <div className="grid grid-cols-3 gap-4 -mt-2">
                    {/* Precipitation */}
                    <div className="bg-blue-100 text-blue-700 text-center rounded-lg p-3 flex flex-col items-center">
                        <div className="text-2xl">🌧️</div>
                        <div>Precipitation</div>
                        <div className="text-xl">
                            {Math.round(currentWeather.precipitation)} {currentLocation.current_units.precipitation}
                        </div>
                    </div>

                    {/* Humidity */}
                    <div className="bg-green-100 text-green-700 text-center rounded-lg p-3 flex flex-col items-center">
                        <div className="text-2xl">💧</div>
                        <div>Humidity</div>
                        <div className="text-xl">
                            {Math.round(currentWeather.relative_humidity_2m)} {currentLocation.current_units.relative_humidity_2m}
                        </div>
                    </div>

                    {/* Wind */}
                    <div className="bg-yellow-100 text-yellow-700 text-center rounded-lg p-3 flex flex-col items-center">
                        <div className="text-2xl">💨</div>
                        <div>Wind</div>
                        <div className="text-xl">
                            {Math.round(currentWeather.wind_speed_10m)} {currentLocation.current_units.wind_speed_10m}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LocationBox