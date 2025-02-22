import LocationSearchBox from '../../components/Others/LocationSearchBox'
import LocationCard from '../../components/Cards/LocationCard'
import logic from '../../logic'
import logicWeather from '../../logic-weather'
import { useEffect, useState } from 'react'
import { useParams } from "react-router"

function Dashboard() {
 
    const [stamp, setStamp] = useState(Date.now())
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)

    const fetchLocations = () => {
        return logic.getAllUserLocations()
            .then((_locations) => {
                // need to update weather data for each location
                const fifteenMinInMs = 15 * 60 * 1000
                _locations.map((location) => {
                    if (location.timeLastUpdated - Date.now() > fifteenMinInMs) {
                        // need to update location weather data 
                        
                    } 
                })
                setLocations(_locations)

            })
            .catch((error) => {
                console.log('Error fetching locations:', error)
            })
    }

    const fetchCurrentLocation = () => {
        return logicWeather.getLocationFromIp()
            .then((currentLocation) => {
                return logic.addUserLocation(currentLocation, true)
                    .then(() => {
                        return logicWeather.retrieveWeatherData(currentLocation)
                        .then((weatherData) => {
                            console.log(weatherData, 'THIS IS WEATHER DATA FROM THE FRONT END')
                            return logicWeather.updateWeatherForLocation(currentLocation, weatherData)
                                .then((locationUpdated) => {
                                    setCurrentLocation(locationUpdated)
                                })
                        })
                    })
                    .catch((error) => {
                        // IMPROVE THIS ERROR LATER
                        console.error('Error adding user current location', error)
                    })
            })
    }

    useEffect(() => {
        fetchCurrentLocation()
            .then(() => {
            })
    }, [])

    useEffect(() => {
        fetchLocations()
            .then(() => {
            })
    }, [stamp])

    return (
        <div className="grid grid-rows-2 grid-cols-2 h-screen">
            {/* Columna 1 en la Fila 1 */}
            {/* Seria mejor crear un componente y solo pasarle como objeto currentLocation*/}
            {/* currentLocation contendria toda la info, tanto nombre, como variables*/}
            <div className="col-span-1 text-black">
            Columna 1, Fila 1. Aqui iria la localizacion actual, que es 
                {currentLocation ? 
                (<div>
                    <p>{currentLocation.name}</p>
                    <p>Latitude: {currentLocation.latitude}</p>
                    <p>Longitude: {currentLocation.longitude}</p>
                </div> ) : 
                (<p>Getting current location...</p>)
                }
                <div className="h-20 w-20">
                    {logicWeather.getWeatherIcon(3, false)}
                </div>
            </div>
        
            {/* Columna 2 en la Fila 1 */}
            <div className="col-span-1 overflow-y-auto h-full">
            <LocationSearchBox setStamp={setStamp} />
            {locations.length > 0 ? (
                locations.map((location, index) => (
                <LocationCard key={index} locationName={location.name} temperature={15} />
                ))
            ) : (
                <p>No locations found</p>
            )}
            </div>
            {/* Fila 2 (Ocupa todo el ancho, con 1/3 y 2/3) */}
            <div className="col-span-2 grid grid-cols-3">
                {/* Columna 1 (1/3 del ancho) */}
                <div className="col-span-1">
                    Columna 1 (1/3 del ancho)
                </div>

                {/* Columna 2 (2/3 del ancho) */}
                <div className="col-span-2">
                    Columna 2 (2/3 del ancho)
                </div>
            </div>
        </div>

    )
}

export default Dashboard
