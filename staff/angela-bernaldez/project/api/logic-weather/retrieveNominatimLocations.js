// among information returned, lat and lon coordinates are present
// they will be used to retrieve data using Weather API (open meteo)

export default (locationString) => {
    // validate locationString?
    // user types something in the front and goes to the back. make sure to catch a string

    // limit is used to return only a specific number of results 
    
    const nominatim_url = `https://nominatim.openstreetmap.org/search?q=${locationString}&limit=5&format=json`

    return fetch(nominatim_url)
    .then((response) => {
        if (!response.ok) throw new Error('Unable to stablish connection with Nominatim API')
        return response.json()
            .then((locationsFound) => {
                if (!locationsFound || locationsFound.length === 0) {
                    throw new Error('No locations found')
                }
                return locationsFound
            })
            .catch((error) => { throw new Errors.UnexpectedError(error.message) })
    })
}

