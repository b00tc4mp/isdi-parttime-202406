import logic from '../logic/index.js'

export default (req, res, next) => {
    const userId = req.id

    try {
        logic.getAllUserLocations(userId)
        .then(favLocations => {
            res.status(200).json({ favLocations: favLocations })
        })
        .catch(error =>
             next(error)
        )
    } catch(error) {
        next(error)
    }
}