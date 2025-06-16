import logic from "../logic/index.js"

export default (req, res, next) => {

    const { username } = req.params

    const id = req.id

    try {
        const requestedUser = logic.getOneUser(id, username)

        res.status(200).send({ user: requestedUser })
    } catch (error) {
        next(error)
    }
}
