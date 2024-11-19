import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization;

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    try {
        logic.getAuthUser(id)
            .then((_username) => {
                res.status(200).json({ username: _username });
            }).catch(error => next(error))
    } catch (error) {
        next(error)
    }
}
