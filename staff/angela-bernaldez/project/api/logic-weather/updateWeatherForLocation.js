import models from '../data/models.js'
import retrieveWeatherData from './'

const { Location } = models

export default (userId, locationData) => {
    // this function is supposed to call retrieveWeatherData when needed
    // only need to update/refresh weather data if timeLastUpdated was less than 15 mins ago 

    // NEED TO CREATE ALL CUSTOMIZED ERRORS!!!!!!! 

    return User.findById(userId)
        .then((user) => {
            if (!user) throw new Errors.AuthError('User id does not belong to anyone')
            // comprobar que esa loc existe para ese usuario 
            
            return retrieveWeatherData(userId, locationData)
                .then((weatherData) => {
                    if (!weatherData) new Error('Unable to get data from Weather API')
                    // once data has been obtained, database needs to be updated
                    // need to find the location and modify it and save it
                    Location.findOne({name: name, latitude: latitude, longitude: longitude})

                })

        })
}