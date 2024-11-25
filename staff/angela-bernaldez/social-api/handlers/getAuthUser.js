import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const { authorization } = req.headers;

    const { id } = jwt.verify(authorization.split(" ")[1], process.env.JWT_SECRET)

    try {
        const username = logic.updateUsername(Number(id))

        res.status(200).json({ username });
    } catch (error) {
        next(error)
    }
}