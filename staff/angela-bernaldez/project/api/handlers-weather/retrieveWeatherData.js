import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const { locationData } = req.body
    const userId = req.id 

    try {
        logicWeather.retrieveWeatherData(userId, locationData)
        .then((weatherData) => {
            res.status(200).json({ weatherData })
        })
        .catch(error => {
            next(error)
        })
    } catch(error) {
        next(error)
    }
}