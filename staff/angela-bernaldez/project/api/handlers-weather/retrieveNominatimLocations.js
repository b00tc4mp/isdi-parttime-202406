import logic from '../logic-weather/index.js'

export default (req, res, next) => {
    const locationString = req.body

    try {
        logic.retrieveNominatimLocations(locationString)
        .then(() => res.status(201).send())
    } catch(error) {
        next(error)
    }
}