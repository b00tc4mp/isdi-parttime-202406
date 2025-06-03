import { Validator, Errors } from 'common'

const retrieveWeatherData = (locationData) => {

    Validator.locationData(locationData)

    const token = sessionStorage.getItem("token")

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
        throw error
    })
}

export default retrieveWeatherData