import logic from '../logic/index.js'

export default (req, res, next) => {
    const userId = req.id

    try {
        logic.getUser(userId)
        .then((user) => {
            res.status(200).json({ user: user })
        })
        .catch(error => 
            next(error)
        )
    } catch(error) {
        next(error)
    }
}