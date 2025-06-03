import models from '../data/models.js'
import { Validator, Errors } from 'common'

const { User, Location } = models

export default (userId, locationData, weatherData) => {
    
    Validator.id(userId)
    Validator.locationData(locationData)
    Validator.weatherData(weatherData)

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            return Location.findOne({name: locationData.name, latitude: locationData.latitude, longitude: locationData.longitude})
                .then((location) => {
                    if (!location) throw new Errors.ExistenceError('Location does not exist in the database. It needs to be added first.')

                    const isUserLoc = user.favLocations.some(favLoc => favLoc._id.toString() === location._id.toString()) || (user.currentLocation._id.toString() === location._id.toString())
                    if (!isUserLoc) throw new Errors.ExistenceError('User does not have the requested location to fetch weather data')

                    location.current = weatherData.current
                    location.current_units = weatherData.current_units
                    location.dailyForecast = weatherData.daily
                    location.dailyForecast_units = weatherData.daily_units
                    location.timeLastUpdated = Date.now()
                    return location.save()
                })
        })
        .catch((error) => { 
            throw error 
        })
}