import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const userId = req.id

    try {
        logicWeather.getLocationFromIp(userId)
        .then((currentLocation) => {
            res.status(200).json({ currentLocation })
        })
        .catch(error => {
            next(error)
        })
    } catch(error) {
        next(error)
    }
}