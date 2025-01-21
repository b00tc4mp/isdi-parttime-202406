import {useState, useEffect} from 'react'

function LocationSearchBox() {

    const [lastCall, setLastCall] = useState(Date.now())

    const [locations, setLocations] = useState([])
    // locations se ira actualizando con lo que me vaya devolviendo nominatim api
    // setLocations(..... de lo que me devuelva la api)

    // renderizar un menu hacia abajo siempre y cuando haya localizaciones o cambios en las loc

    const onChangeInput = (event) => {
        event.preventDefault()

        const dateNow = Date.now()
        console.log(dateNow - lastCall)

        if (dateNow - lastCall > 1000) {
            setLastCall(dateNow)
            // llamada a la nominatim api 
            // event.target.value
            console.log(event.target.value)
        }
    }

    return (
        <div>
            <input
                onChange={onChangeInput}
                type="text"
                id="locationSearch"
                placeholder="Search for a city"
                className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70" 
            />
            {/*componente a parte al que le pase como prop locations y lo renderice x cada loc
            haciendo un map 
            y le pongo el useEffect con el locations como variable (antes del return)*/}
        </div>
        // poner un onchange en lugar de onsubmit 
        // y poner un settimeout
    )
}

export default LocationSearchBox