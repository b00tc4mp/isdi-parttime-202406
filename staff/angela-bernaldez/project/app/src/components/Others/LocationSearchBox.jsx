import {useState, useEffect, useRef} from 'react'
import logicWeather from '../../logic-weather'
import logic from '../../logic'
import { IconSearch } from '../icons/icons.jsx'

function LocationSearchBox({ setStamp }) {

    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState('')    
    
    const debounceTimeout = useRef(null) // used to store timeout between different renders

    const handleInputChange = (event) => {
        const newInputValue = event.target.value
        setInputValue(newInputValue)

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {

            if (newInputValue.trim() === '') {
                setLocations([])
                return 
            }
            logicWeather.retrieveNominatimLocations(newInputValue)
                .then((locationsFound) => {
                    if (locationsFound && locationsFound.length > 0) {
                        setLocations(locationsFound.map((item) => ({
                            displayName: item.display_name,
                            name: item.name,
                            latitude: item.lat,
                            longitude: item.lon 
                        })))
                    } else {
                        setLocations([])
                    }
                })
                .catch((error) => {
                    console.error('Error fetching locations:', error)
                })
        }, 1000)
    }

    const handleSelect = (selectedLocation) => {
        console.log('Selected location is:', selectedLocation)
        // llamar a la logica que lleva la nueva localizacion al back
        const isCurrentLocation = false
        return logic.addUserLocation(selectedLocation, isCurrentLocation)
            .then(() => {
                setInputValue('') 
                setLocations([])
                setStamp(Date.now())
            })
    }

    return (
        <div className="w-full relative self-end max-w-[800px]"> 
            <label className="input input-bordered flex items-center gap-2">
                <input 
                    type="text" 
                    className="grow" 
                    placeholder="Search for a location..." 
                    onChange={handleInputChange}
                    value={inputValue}
                />
                <IconSearch fillRule="evenodd" />
            </label>
            {locations.length > 0 && (
                <ul className="absolute menu dropdown-content bg-white rounded-box z-10 mt-2 w-full max-h-[300px] overflow-y-auto shadow-lg p-4">
                    {locations.map((location, index) => (
                        <li 
                            key={index}
                            onClick={() => handleSelect(location)}
                            className="text-left p-2 cursor-pointer transition-colors duration-200 hover:bg-gray-200 text-black"
                        >
                            {location.displayName}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default LocationSearchBox