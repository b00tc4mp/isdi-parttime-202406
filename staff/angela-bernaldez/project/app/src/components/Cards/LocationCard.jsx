function LocationCard({locationName, temperature}) {
    // I guess I´d need to pass as an argument of this function the location data
    // location name, min and max temperature, etc.

    // this component is to be called once for each favlocation for a specfic user
    return (
        <div className="bg-slate-500 flex flex-row w-full h-[8rem] items-center justify-between mb-6">
            <div className="w-2/3 pl-[1rem]">
                <h1>{locationName}</h1>
            </div>
            <div className="w-1/3 text-right pr-[1rem]">
                <p>{temperature}</p>
            </div>
        </div>
    )
}

export default LocationCard