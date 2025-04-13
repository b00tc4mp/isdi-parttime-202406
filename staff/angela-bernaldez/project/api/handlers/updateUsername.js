import logic from '../logic/index.js'

export default(req, res, next) => {
    const userId = req.id
    const { 'new-username': newUsername } = req.body

    try {
        logic.updateUsername(userId, newUsername)
        .then(() => 
            res.status(201).send()
        )
        .catch(error => 
            next(error)
        )
    } catch(error) {
        next(error)
    }
}