import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const { locationString } = req.body
    const userId = req.id 

    try {
        logicWeather.retrieveNominatimLocations(userId, locationString)
        .then((locationsFound) => {
            res.status(200).json({ locationsFound })
        })
        .catch(error => {
            next(error)
        })
    } catch(error) {
        next(error)
    }
}