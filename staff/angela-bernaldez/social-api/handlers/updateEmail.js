import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
    const { email } = req.body

    try {
        logic.updateEmail(Number(id), email)

        res.status(200).send()
    } catch(error) {
        next(error)
    }
}