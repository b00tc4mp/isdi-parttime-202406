import jwt from "jsonwebtoken";
import logic from "../logic/index.js"

export default(req, res, next) => {
    const token = req.headers.authorization

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)
    const { password } = req.body

    try {
        logic.deleteUser(id, password)
        .then(() => {
            res.status(200).send();
        }).catch(error => next(error))
    } catch(error) {
        next(error)
    }
}