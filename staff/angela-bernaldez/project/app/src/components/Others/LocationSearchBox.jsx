import {useState, useEffect, useRef} from 'react'
import logicWeather from '../../logic-weather'
import { IconSearch } from '../icons/icons.jsx'

function LocationSearchBox() {

    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState('')    
    
    const debounceTimeout = useRef(null) // used to store timeout between different renders

    const handleInputChange = (event) => {
        const newInputValue = event.target.value
        setInputValue(newInputValue)

        console.log('locationString', newInputValue)

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {

            if (newInputValue.trim() === '') {
                setLocations([])
                return 
            }
            console.log('printing input value before calling api', newInputValue)
            logicWeather.retrieveNominatimLocations(newInputValue)
                .then((locationsFound) => {
                    console.log(locationsFound, 'locations q me devuelve la api')
                    if (locationsFound && locationsFound.length > 0) {
                        setLocations(locationsFound.map((item) => ({
                            label: item.display_name,
                            value: item.display_name,
                            fullData: item 
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
        setInputValue(selectedLocation ? selectedLocation.label : '')
        setLocations([])
    }

    // intentarlo haciendo combinando dos componentes de daisy
    // usar un text input -> search box
    // dropdown menu para las diferentes opciones

    return (
    <div className="w-full">
        <label className="input input-bordered flex items-center gap-2">
            <input 
                type="text" 
                className="grow" 
                placeholder="Search" 
                onChange={handleInputChange}
                value={inputValue}
            />
            <IconSearch fillRule="evenodd" />
        </label>
        <ul
          className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-fit p-4 shadow">
          {locations.length > 0 && locations.map((location) => {
            return <li 
                    key={location.value}
                    onClick={() => handleSelect(location)}
                    className="text-left p-2 cursor-pointer transition-colors duration-200 hover:bg-gray-200"
                >
                    {location.label}
                </li>
          })}
        </ul>
    </div>
    )
}

export default LocationSearchBox