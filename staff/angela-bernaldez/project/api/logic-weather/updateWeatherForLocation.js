import models from '../data/models.js'
import retrieveWeatherData from './retrieveWeatherData.js'

const { User, Location } = models

export default (userId, locationData, weatherData) => {
    // this function is supposed to call retrieveWeatherData when needed
    // only need to update/refresh weather data if timeLastUpdated was less than 15 mins ago 

    // NEED TO CREATE ALL CUSTOMIZED ERRORS!!!!!!! 

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // comprobar que esa loc existe para ese usuario 
            return Location.findOne({name: locationData.name, latitude: locationData.latitude, longitude: locationData.longitude})
                .then((location) => {
                    // comprobar que loc id esta en user.favlocs o user.current 
                    const isUserLoc = user.favLocations.some(favLoc => favLoc._id === location._id) || (user.currentLocation._id === location._id)
                    if (!isUserLoc) new Error('User does not have the requested location to fetch weather data')

                    // NEED TO MODIFY KEYS HAVING _ WITH CAMELCASE 
                    // replace wmo_code with wmoCode.
                    location.current = weatherData.current
                    location.current_units = weatherData.current_units
                    location.dailyForecast = weatherData.daily
                    location.dailyForecast_units = weatherData.daily_units
                    location.timeLastUpdated = Date.now()
                    return location.save()
                })
                .catch((error) => { throw new Errors.UnexpectedError(error.message) })
        })
}