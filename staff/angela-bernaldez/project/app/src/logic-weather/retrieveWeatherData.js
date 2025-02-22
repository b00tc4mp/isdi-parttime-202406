import { Errors } from 'common'

const retrieveWeatherData = (locationData) => {

    const token = sessionStorage.getItem("token")

    // necesito userId(sale del token) y locationData

    return fetch(`${import.meta.env.VITE_API_URL}users/weather-data/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ locationData: locationData })
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.weatherData)
                return res.json()
                    .then(body => {
                        const constructor = Errors[body.name]
                        throw new constructor(`${body.message}`)
                    })
    })
    .catch((error) => {
        if (error instanceof Errors.BadRequestError)
            throw new Errors.ServerError('Server in not connected')
        throw error
    })
}

export default retrieveWeatherData