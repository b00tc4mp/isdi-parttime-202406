import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization;

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    const { username } = req.body

    try {
        logic.updateUsername(id, username)
            .then(() => {
                res.status(200).send();
            })
            .catch(error => next(error))


    } catch (error) {
        next(error)
    }
}
