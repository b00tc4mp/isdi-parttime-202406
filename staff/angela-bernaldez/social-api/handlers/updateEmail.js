import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers

    const idLogged = Number(authorization.split(" ")[1]);
    const { email } = req.body

    try {
        logic.updateEmail(idLogged, email)

        res.status(200).send()
    } catch(error) {
        next(error)
    }
}