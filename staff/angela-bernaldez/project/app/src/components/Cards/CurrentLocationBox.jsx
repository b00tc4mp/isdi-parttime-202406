import logicWeather from '../../logic-weather'

function CurrentLocationBox({ currentLocation }) {
    const currentWeather = currentLocation.current

    return (
        <div className="grid grid-cols-2 gap-4 h-full w-full bg-white shadow-lg rounded-2xl p-6 m-4">
            {/* Columna izquierda */}
            <div className="flex flex-col justify-start h-full">
                {/* 📍 Ubicación + Información general */}
                <div className="flex flex-col space-y-2 mb-6 mt-8">
                    <div className="text-gray-800 text-3xl font-bold">📍 {currentLocation.name}</div>
                    <div className="text-gray-500 text-xl font-medium">Weather</div>
                    <div className="text-gray-500 text-lg font-medium">Now</div>
                </div>

                {/* Temperaturas */}
                <div className="flex flex-col justify-start space-y-2 mt-16">
                    {/* Temperatura actual */}
                    <div className="flex space-x-2 text-gray-900 text-5xl font-bold">
                        <span>{currentWeather.temperature_2m} {currentLocation.current_units.temperature_2m}</span>
                    </div>

                    {/* Temperatura aparente */}
                    <div className="flex items-center space-x-2 text-gray-500 text-xl font-bold">
                        <span>Feels like {currentWeather.apparent_temperature} {currentLocation.current_units.apparent_temperature}</span>
                    </div>
                </div>
            </div>
            {/* Columna derecha */}
            <div className="flex flex-col justify-between h-full max-h-full overflow-hidden">
                {/* Icono del clima */}
                <div className="flex justify-center items-center">
                    <div className="overflow-hidden w-64 h-64 -mt-8">
                        {logicWeather.getWeatherIcon(currentWeather.weather_code, currentWeather.is_day)}
                    </div>
                </div>
            {/* Otras variables del clima */}
            <div className="grid grid-cols-3 gap-4 -mt-2">
                {/* Recuadro de Precipitación (vertical) */}
                <div className="bg-blue-100 text-blue-700 text-center rounded-lg p-3 flex flex-col items-center">
                    <div className="text-2xl">🌧️</div>
                    <div>Precipitation</div>
                    <div className="text-xl">
                        {currentWeather.precipitation} {currentLocation.current_units.precipitation}
                    </div>
                </div>

                {/* Recuadro de Humedad (vertical) */}
                <div className="bg-green-100 text-green-700 text-center rounded-lg p-3 flex flex-col items-center">
                    <div className="text-2xl">💧</div>
                    <div>Humidity</div>
                    <div className="text-xl">
                        {currentWeather.relative_humidity_2m} {currentLocation.current_units.relative_humidity_2m}
                    </div>
                </div>

                {/* Recuadro de Viento (vertical) */}
                <div className="bg-yellow-100 text-yellow-700 text-center rounded-lg p-3 flex flex-col items-center">
                    <div className="text-2xl">💨</div>
                    <div>Wind</div>
                    <div className="text-xl">
                        {currentWeather.wind_speed_10m} {currentLocation.current_units.wind_speed_10m}
                    </div>
                </div>
            </div>
        </div>


        </div>
    )
}




export default CurrentLocationBox