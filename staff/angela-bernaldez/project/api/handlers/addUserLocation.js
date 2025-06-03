import logic from '../logic/index.js'

export default (req, res, next) => {
    const userId = req.id
    const { locationData, isCurrentLocation } = req.body

    try {
        logic.addUserLocation(userId, locationData, isCurrentLocation)
            .then(() => 
                res.status(201).send()
            )
            .catch(error => {
                next(error)
            })
    } catch(error) {
        next(error)
    }
}