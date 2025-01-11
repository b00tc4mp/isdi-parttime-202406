// among information returned, lat and lon coordinates are present
// they will be used to retrieve data using Weather API (open meteo)

export default (locationString) => {
    // validate locationString?
    // user types something in the front and goes to the back. make sure to catch a string

    // limit is used to return only a specific number of results 
    const nominatim_url = `https://nominatim.openstreetmap.org/search?q=${locationString}&limit=5&format=json`

    fetch(nominatim_url)
    .then((response) => {
        if (!response) throw new Error('Unable to stablish connection with Nominatim API')
        return response.json()
            .then((locationsFound) => {
                return locationsFound
            })
            .catch((error) => { throw new Errors.UnexpectedError(error.message) })
    })
}

// poner un setTimeOut desde el front 
// podria hacerlo con ujn boolean de si se puede hacer o no la llamada en funcion de si se harealizado hace menos de 1 seg