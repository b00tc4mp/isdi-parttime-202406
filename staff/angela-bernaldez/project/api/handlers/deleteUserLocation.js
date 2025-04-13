import logic from '../logic/index.js'

export default(req, res, next) => {

    const userId = req.id
    const { locationData } = req.body

    try {
        logic.deleteUserLocation(userId, locationData)
        .then(() => {
            res.status(200).send()
        })
        .catch(error => 
            next(error)
        )
    } catch(error) {
        next(error)
    }
}