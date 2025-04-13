import { Validator, Errors } from 'common'

const updateWeatherForLocation = (locationData, weatherData) => {

    Validator.locationData(locationData)
    Validator.weatherData(weatherData)

    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}users/weather-data/`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ 
            locationData: locationData, 
            weatherData: weatherData
            })
    })
    .then((res) => {
        if (res.status === 200) return res.json()
            .then(body => body.locationUpdated)
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

export default updateWeatherForLocation