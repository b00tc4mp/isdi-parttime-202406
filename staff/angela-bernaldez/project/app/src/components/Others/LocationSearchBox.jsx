import {useState, useEffect, useRef} from 'react'
import logicWeather from '../../logic-weather'
import { IconSearch } from '../icons/icons.jsx'

function LocationSearchBox() {

    const [locations, setLocations] = useState([])
    const [inputValue, setInputValue] = useState('')    
    
    const debounceTimeout = useRef(null) // used to store timeout between different renders

    const handleInputChange = (locationString) => {
        setInputValue(locationString)

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {

            if (locationString.trim() === '') {
                setLocations([])
                return 
            }
            logicWeather.retrieveNominatimLocations(locationString)
                .then((locationsFound) => {
                    if (locationsFound && locationsFound.length > 0) {
                        setLocations(locationsFound.map((item) => ({
                            label: item.display_name,
                            value: item.display_name,
                            fullData: item 
                        })))
                        console.log(locations)
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
    }

    // intentarlo haciendo combinando dos componentes de daisy
    // usar un text input -> search box
    // dropdown menu para las diferentes opciones

    return (
    <div className="w-full">
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <IconSearch fillRule="evenodd" />
        </label>
    </div>
    )
}

export default LocationSearchBox