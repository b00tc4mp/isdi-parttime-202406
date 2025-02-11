import LocationSearchBox from '../../components/Others/LocationSearchBox'
import LocationCard from '../../components/Cards/LocationCard'
import logic from '../../logic'
import { useEffect, useState } from 'react'

function Overview() {
    // do something here

    // ARREGLARRRRRRRRRRRRRR
    const [stamp, setStamp] = useState(Date.now())
    const [locations, setLocations] = useState([])

    const fetchLocations = () => {
        console.log('Fetching locations...')
        return logic.getAllUserLocations()
            .then((_locations) => {
                console.log('Locations fetched:', _locations)
                setLocations(_locations)
            })
            .catch((error) => {
                console.log('Error fetching locations:', error)
            })
    }

    useEffect(() => {
        fetchLocations()
            .then(() => {
            })
    }, [stamp])

    return <div className="flex flex-col gap-2 w-full px-14 items-center">
        <LocationSearchBox setStamp={setStamp}/>
        {/*<LocationCard locationName="Sevilla" temperature={15}/> */}
        {locations.length > 0 ? (
                locations.map((location, index) => (
                    <LocationCard key={index} locationName={location.name} temperature={15} />
                ))
            ) : (
                <p>No locations found</p>  
        )}

    </div>

}

export default Overview
