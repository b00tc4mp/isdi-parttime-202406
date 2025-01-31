import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {
    const locationString = req.body
    const userId = req.id 

    try {
        logicWeather.retrieveNominatimLocations(userId, locationString)
        .then(() => res.status(201).send())
    } catch(error) {
        next(error)
    }
}