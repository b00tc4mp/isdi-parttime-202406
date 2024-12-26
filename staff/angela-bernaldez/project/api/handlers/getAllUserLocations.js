import logic from '../logic/index.js'

export default (req, res, next) => {
    const userId = req.id

    try {
        logic.getAllUserLocations(userId)
        .then(favLocations => {
            // esta es la info que paso a donde hago la llamada del get?
            res.status(200).json({ locations: favLocations })
        })
        .catch(error => next(error))
    } catch(error) {
        next(error)
    }
}