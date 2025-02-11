import {useState, useEffect, useRef} from 'react'
import logicWeather from '../../logic-weather'
import logic from '../../logic'
import { IconSearch } from '../icons/icons.jsx'

function LocationSearchBox({ setStamp }) {

    /// ARREGLAAAR

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
                            display_name: item.display_name,
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
        return logic.addUserLocation(selectedLocation)
            .then(() => {
                setInputValue('') // para que se muestre vacia la barra de busqueda tras seleccionar localizacion
                setLocations([])
                setStamp(Date.now())
            })
    }

    return (
    <div className="w-2/3">
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
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-fit p-4 shadow">
                {locations.map((location, index) => (
                <li 
                    key={index}
                    onClick={() => handleSelect(location)}
                    className="text-left p-2 cursor-pointer transition-colors duration-200 hover:bg-gray-200"
                >
                    {location.display_name}
                </li>
                ))}
            </ul>
        )}
    </div>
    )
}

export default LocationSearchBox