import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const { locationData, weatherData } = req.body
    const userId = req.id 

    try {
        logicWeather.updateWeatherForLocation(userId, locationData, weatherData)
        .then((locationUpdated) => {
            res.status(200).json({ locationUpdated })
        })
        .catch(error => {
            next(error)
        })
    } catch(error) {
        next(error)
    }
}