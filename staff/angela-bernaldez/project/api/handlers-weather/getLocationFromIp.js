import logicWeather from '../logic-weather/index.js'

export default (req, res, next) => {

    const userId = req.id

    try {
        logicWeather.getLocationFromIp(userId)
        .then(() => {
            res.status(200).json({})
        })
    } catch(error) {
        next(error)
    }
}