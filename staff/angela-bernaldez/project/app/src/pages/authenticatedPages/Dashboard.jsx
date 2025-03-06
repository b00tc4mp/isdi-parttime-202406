import logic from '../../logic'
import logicWeather from '../../logic-weather'
import { useEffect, useState } from 'react'
import Header from '../../components/Others/Header'
import { LocationBox, LocationCard, SunInfoBox, WeeklyForecast } from '../../components/Cards'

function Dashboard() {
 
    const [stamp, setStamp] = useState(Date.now())
    const [locations, setLocations] = useState([])
    const [currentLocation, setCurrentLocation] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)
 
    const fetchLocations = () => {
        return logic.getAllUserLocations()
            .then((_locations) => {
                const fifteenMinInMs = 15 * 60 * 1000
    
                const updatePromises = _locations.map((location) => {
                    if (Date.now() - new Date(location.timeLastUpdated).getTime() > fifteenMinInMs || !location.current ) {
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
                                        console.log('Ubicación actualizada en la BD:', currentLocation)
                                        setCurrentLocation(currentLocation)
                                        setSelectedLocation(currentLocation)
                                    })
                            })
                    })
                    .catch((error) => {
                        // IMPROVE THIS ERROR LATER
                        console.error('Error adding user current location', error)
                    })
            })
    }

    const handleLocationSelect = (location) => {
        console.log('SELECTED LOCATION IS:', location)
        setSelectedLocation(location)
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

                <div className="col-span-1 text-black">
                    {selectedLocation ? 
                    (<div className="h-full w-full">
                        <LocationBox currentLocation={selectedLocation}/>
                    </div> ) : 
                    (<p>Getting current location...</p>)
                    }
                </div>
            
                <div className="col-span-1 overflow-y-auto h-full">
                    <div className='w-full h-full m-4'>
                        {currentLocation ? 
                        (<LocationCard 
                                key='current' 
                                locationData={currentLocation}
                                onLocationSelect={handleLocationSelect}
                                isCurrentLocation={true}
                                setStamp={setStamp}  /> 
                        ) : null}
                        {locations.length > 0 ? (
                            locations.map((location, index) => (
                            <LocationCard 
                                key={index} 
                                locationData={location}
                                onLocationSelect={handleLocationSelect}
                                isCurrentLocation={false}
                                setStamp={setStamp} />
                            ))
                        ) : null}
                    </div>
                </div>

                <div className="col-span-2 grid grid-cols-3">
                    {selectedLocation ?
                    (<div>
                        <SunInfoBox locationData={selectedLocation}/>
                    </div>) :
                    (<p>Getting current location...</p>)
                    }

                    <div className="col-span-2">
                        {selectedLocation ? 
                        (<div>
                            <WeeklyForecast dailyForecast={selectedLocation.dailyForecast}/>
                        </div>) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
