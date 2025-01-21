import LocationSearchBox from '../../components/Others/LocationSearchBox'
import LocationCard from '../../components/Cards/LocationCard'

function Overview() {
    // do something here

    return <div className="flex flex-col gap-2 w-full px-14 items-center">
        <LocationSearchBox />
        <LocationCard locationName="Sevilla" temperature={15}/>
        <LocationCard locationName="Madrid" temperature={12}/>
        <LocationCard locationName="Brighton" temperature={8}/>
    </div>

    // mirar el ejemplo en Home.jsx

    // bring list of all cities for user logged in
    // getAllUserLocations is what I need to call
    

    // then render one component (card for each city)
}

export default Overview
