import models from '../data/models.js'
import { Validator, Errors } from 'common'

const { Location, User } = models

export default (userId, locationData) => {

    Validator.id(userId)
    Validator.locationData(locationData)

    const { name, latitude, longitude } = locationData 

    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,precipitation_sum,precipitation_probability_max&timezone=auto`

    return User.findById(userId) 
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return Location.findOne({name: name, latitude: latitude, longitude: longitude})
                .then((location) => {
                    if (!location) throw new Errors.ExistenceError('Location does not exist in the database. It needs to be added first.')
                    return fetch(weatherUrl)
                        .then((response) => {
                            if (!response.ok) throw new Errors.OpenMeteoAPIConnectionError('Unable to stablish connection with Weather API')
                            return response.json()
                                .then((weatherData) => {
                                    return weatherData
                                })
                        })
                })
        }) 
        .catch((error) => { 
            throw error
        })
}