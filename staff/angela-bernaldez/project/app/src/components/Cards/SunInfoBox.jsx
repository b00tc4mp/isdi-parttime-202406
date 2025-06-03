import iconsDay from '../icons/iconsDay'
import iconsNight from '../icons/iconsNight'


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

function SunInfoBox({ locationData }) {
    return (
        <div className="h-auto w-full p-6 bg-white shadow-lg rounded-2xl">
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center items-center bg-yellow-100 text-yellow-700 text-center rounded-lg h-32">
                    <div className="w-32 h-32 -mt-8 -mb-12">
                        <iconsDay.SunriseIcon />
                    </div>
                    <span className="mt-2 font-medium">Sunrise</span>
                    <span>{getDateFromTimeString(locationData.dailyForecast.sunrise[0])}</span>
                </div>
                <div className="flex flex-col justify-center items-center bg-orange-100 text-orange-700 text-center rounded-lg h-32">
                    <div className="w-32 h-32 -mt-8 -mb-12">
                        <iconsNight.SunsetIcon />
                    </div>
                    <span className="mt-2 font-medium">Sunset</span>
                    <span>{getDateFromTimeString(locationData.dailyForecast.sunset[0])}</span>
                </div>
                <div className="flex flex-col justify-center items-center bg-blue-100 text-blue-700 text-center rounded-lg h-32 mt-0">
                    ☀️ Sunshine Duration <br />
                    {secondsToHoursMinutes(locationData.dailyForecast.sunshine_duration[0])}
                </div>
                <div className="flex flex-col justify-center items-center bg-gray-100 text-gray-700 text-center rounded-lg h-32 mt-0">
                    🌤️ Sunlight Duration <br />
                    {secondsToHoursMinutes(locationData.dailyForecast.daylight_duration[0])}
                </div>
            </div>
        </div>
    )
}

export default SunInfoBox