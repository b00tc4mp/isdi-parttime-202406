import LocationSearchBox from '../../components/Others/LocationSearchBox'
import LocationCard from '../../components/Cards/LocationCard'
import logic from '../../logic'
import logicWeather from '../../logic-weather'
import { useEffect, useState } from 'react'
import CurrentLocationBox from '../../components/Cards/CurrentLocationBox'
import Header from '../../components/Others/Header'
import { SunInfoBox } from '../../components/Cards'

function Dashboard() {
 
    const [stamp, setStamp] = useState(Date.now())
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)

    const fetchLocations = () => {
        return logic.getAllUserLocations()
            .then((_locations) => {
                const fifteenMinInMs = 15 * 60 * 1000
    
                const updatePromises = _locations.map((location) => {
                    if (Date.now() - new Date(location.timeLastUpdated).getTime() > fifteenMinInMs) {
                        return logicWeather.retrieveWeatherData(location)
                            .then((weatherData) => {
                                return logicWeather.updateWeatherForLocation(location, weatherData)
                            })
                            .then((locationUpdated) => {
                                return locationUpdated
                            })
                            .catch((error) => {
                                console.log('Error updating location:', location, error)
                                return location
                            })
                    } else {
                        console.log('No need to update weather data for:', location)
                        return Promise.resolve(location)
                    }
                })
                return Promise.all(updatePromises)
            })
            .then((updatedLocations) => {
                setLocations(updatedLocations)
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
                            return logicWeather.updateWeatherForLocation(currentLocation, weatherData)
                                .then((currentLocation) => {
                                    setCurrentLocation(currentLocation)
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
        <div className="h-screen">
                  <Header setStamp={setStamp}/>

            <div className="grid grid-rows-2 grid-cols-2 gap-5 h-screen">
                {/* Columna 1 en la Fila 1 */}
                <div className="col-span-1 text-black">
                    {currentLocation ? 
                    (<div className="h-full w-full">
                        <CurrentLocationBox currentLocation={currentLocation}/>
                    </div> ) : 
                    (<p>Getting current location...</p>)
                    }
                </div>
            
                {/* Columna 2 en la Fila 1 */}
                <div className="col-span-1 overflow-y-auto h-full">
                    <div className='w-full h-full m-4'>
                        {locations.length > 0 ? (
                            locations.map((location, index) => (
                            <LocationCard key={index} locationData={location} />
                            ))
                        ) : (
                            <p>No locations found</p>
                        )}
                    </div>
                </div>
                {/* Fila 2 (Ocupa todo el ancho, con 1/3 y 2/3) */}
                <div className="col-span-2 grid grid-cols-3">
                    {currentLocation ?
                    (<div>
                        <SunInfoBox currentLocation={currentLocation}/>
                    </div>) :
                    (<p>Getting current location...</p>)
                    }
                    {/* Columna 2 (2/3 del ancho) */}
                    <div className="col-span-2">
                        Columna 2 (2/3 del ancho)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
