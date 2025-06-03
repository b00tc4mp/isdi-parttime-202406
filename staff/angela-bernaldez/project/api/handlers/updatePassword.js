import logic from '../logic/index.js'

export default(req, res, next) => {
    const userId = req.id
    const { 'old-password': oldPassword, 'new-password': newPassword } = req.body

    try {
        logic.updatePassword(userId, oldPassword, newPassword)
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