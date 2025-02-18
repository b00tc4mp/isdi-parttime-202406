import { Errors } from 'common'

const getLocationFromIp = () => {

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/current-location/`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ currentLocation: currentLocation })
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.currentLocation)
                return res.json()
                    .then(body => {
                        const constructor = Errors[body.name]
                        throw new constructor(`${body.message}`)
                    })
    })
    .catch((error) => {
        if (error instanceof Errors.BadRequestError)
            throw new Errors.ServerError("Server in not connected")
        throw error
    })
}

export default getLocationFromIp