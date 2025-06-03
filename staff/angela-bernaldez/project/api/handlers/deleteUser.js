import logic from '../logic/index.js'

export default(req, res, next) => {

    const id = req.id
    const { password } = req.body

    try {
        logic.deleteUser(id, password)
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