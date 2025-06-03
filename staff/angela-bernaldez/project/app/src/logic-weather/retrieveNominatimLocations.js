import { Validator, Errors } from 'common'

const retrieveNominatimLocations = (locationString) => {

    Validator.locationString(locationString)

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/nominatim-locations/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ locationString: locationString })
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.locationsFound)
                return res.json()
                    .then(body => {
                        const constructor = Errors[body.name]
                        throw new constructor(`${body.message}`)
                    })
    })
    .catch((error) => {
        throw error
    })
}

export default retrieveNominatimLocations