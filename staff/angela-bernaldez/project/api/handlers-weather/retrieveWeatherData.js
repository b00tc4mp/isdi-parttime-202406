import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const { locationData } = req.body
    const userId = req.id 

    console.log(locationData, 'THIS IS LOC DATA IN THE HANDLER')

    try {
        logicWeather.retrieveWeatherData(userId, locationData)
        .then((weatherData) => {
            res.status(200).json({ weatherData })
        })
    } catch(error) {
        next(error)
    }
}