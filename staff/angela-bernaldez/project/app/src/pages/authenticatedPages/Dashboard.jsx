import logic from '../../logic'
import logicWeather from '../../logic-weather'
import { useEffect, useState } from 'react'
import Header from '../../components/Others/Header'
import { LocationBox, LocationCard, SunInfoBox, WeeklyForecast } from '../../components/Cards'

function Dashboard({ onUserLoggedOut }) {
 
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
                        return Promise.resolve(location)
                    }
                })
                return Promise.all(updatePromises)
            })
            .then((updatedLocations) => {
                setLocations(updatedLocations)
            })
            .catch((error) => {
                throw error 
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
                                        setSelectedLocation(currentLocation)
                                    })
                            })
                    })
                    .catch((error) => {
                        throw error 
                    })
            })
    }

    const handleLocationSelect = (location) => {
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
        <div className="h-screen w-screen overflow-hidden bg-blue-100">
            <Header 
                setStamp={setStamp}
                onUserLoggedOut={onUserLoggedOut}
            />
            <div className="grid grid-rows-5">
                <div className="h-full grid grid-cols-2 row-span-3 m-4">
                    <div className="col-span-1 text-black">
                        {selectedLocation ? 
                        (<div className="">
                            <LocationBox currentLocation={selectedLocation}/>
                        </div> ) : 
                        (<p>Getting current location...</p>)
                        }
                    </div>

                    <div className=''>
                        <div className="overflow-y-auto max-h-[47vh] m-4 mt-0 mb-0">
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
                </div>

                <div className="grid grid-cols-3 row-span-2 ml-4 mr-4 gap-4 ">
                    <div className="col-span-1">
                        {selectedLocation ?
                        (<div>
                            <SunInfoBox locationData={selectedLocation}/>
                        </div>) :
                        (<p>Getting current location...</p>)
                        }
                    </div>
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
