import {useState, useEffect, useRef} from 'react'
import logicWeather from '../../logic-weather'
import Select from 'react-select'

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
        console.log('Selected location is:', selectedLocation);
        setInputValue(selectedLocation ? selectedLocation.label : '')
    }

    return (
        <div>
            <Select
                className="bg-slate-500 flex flex-row w-[90%] md:w-[80%] h-[8rem] items-center justify-between mb-4"
                value={inputValue ? { label: inputValue, value: inputValue } : ''} 
                onInputChange={handleInputChange} 
                onChange={handleSelect} 
                options={locations} 
                placeholder="Search for a location..."  
                isClearable
                inputValue={inputValue}  
                styles={{
                    control: (provided) => ({
                        ...provided,
                        minWidth: '100%',  
                        maxWidth: '100%', 
                        width: '100%',    
                    }),
                    menu: (provided) => ({
                        ...provided,
                        width: '100%',
                        maxHeight: 300,  
                        overflowY: 'auto', 
                    }),
                }}
            />
        </div>
    )
}

export default LocationSearchBox