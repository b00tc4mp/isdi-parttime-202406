function secondsToHoursMinutes(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
}

function getDateFromTimeString(timeString) {
    const date = new Date(timeString)
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, "0")}`
}

function SunInfoBox({ currentLocation }) {

    console.log(currentLocation.dailyForecast)
    return (
        <div className="h-full w-full bg-white shadow-lg rounded-2xl p-6 m-4 mt-8">
            <div className="grid grid-cols-2 gap-6 h-full">
                <div className="flex flex-col justify-center items-center bg-yellow-100 text-yellow-700 text-center rounded-lg p-6 h-32">
                    🌅 Sunrise <br />
                    {getDateFromTimeString(currentLocation.dailyForecast.sunrise[0])}
                </div>
                <div className="flex flex-col justify-center items-center bg-orange-100 text-orange-700 text-center rounded-lg p-6 h-32">
                    🌇 Sunset <br />
                    {getDateFromTimeString(currentLocation.dailyForecast.sunset[0])}
                </div>
                <div className="flex flex-col justify-center items-center bg-blue-100 text-blue-700 text-center rounded-lg p-6 h-32">
                    ☀️ Sunshine Duration <br />
                    {secondsToHoursMinutes(currentLocation.dailyForecast.sunshine_duration[0])}
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-700 text-center rounded-lg p-6 h-32">
                    🌤️ Sunlight Duration <br />
                    {secondsToHoursMinutes(currentLocation.dailyForecast.daylight_duration[0])}
                </div>
            </div>
        </div>
    );
    
}


export default SunInfoBox