import getWeatherIcon from '../../logic-weather/getWeatherIcon'
import { useState } from 'react'
import logic from '../../logic'

function LocationCard({ locationData, onLocationSelect, isCurrentLocation, setStamp }) {

    const [showDelete, setShowDelete] = useState(null)

    const handleClicToDelete = (event) => {
        event.stopPropagation() // to avoid clic being considered as a clic in the main div
        logic.deleteUserLocation(locationData)
        .then(() => {
            console.log('location is going to be deleted')
            setStamp(Date.now())
        })
    }

    return (
        <div 
            className="bg-white cursor-pointer hover:shadow-xl hover:border hover:border-gray-300 flex flex-row max-w-full h-[8rem] shadow-lg rounded-2xl items-center justify-between mb-6 mr-10 p-4 relative"  // Agregado relative aquí
            onClick={() => onLocationSelect(locationData)}
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <div className="flex flex-col w-2/3 pl-4">
                <h1 className="text-xl font-semibold">{locationData.name}</h1>
                {locationData.current ? 
                <p className="text-gray-600 text-md">{locationData.current.temperature_2m}°C</p> :
                null 
                } 
            </div>

            <div className="w-28 h-28 flex items-center justify-center mr-4">
                {locationData.current ? 
                getWeatherIcon(locationData.current.weather_code) :
                null}
            </div>

            {showDelete && !isCurrentLocation &&(
            <button
                className="absolute top-2 right-2 m-2 text-red-500 hover:text-red-700"
                onClick={handleClicToDelete}
            >
                ❌
            </button>
            )}
        </div>
    )
}


export default LocationCard