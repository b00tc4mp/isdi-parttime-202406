function LocationSearchBox() {
    return (
        <div>
            <input
                type="text"
                id="locationSearch"
                placeholder="Search for a city"
                className="input input-bordered input-ghost glass w-full focus:text-white placeholder:text-white placeholder:text-opacity-70" 
            />
        </div>
    )
}

export default LocationSearchBox