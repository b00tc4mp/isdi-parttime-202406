import logic from '../logic/index.js'

export default(req, res, next) => {
    const { username, email, password } = req.body

    try {
        logic.registerUser(username, email, password)
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