import { Validator, Errors } from 'common'

const addUserLocation = (locationData, isCurrentLocation = false) => {
    
    Validator.locationData(locationData)
    Validator.isCurrentLocation(isCurrentLocation)

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/locations`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ locationData, isCurrentLocation })
    })
    .then((res) => {
        if (res.status === 201) return
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

export default addUserLocation