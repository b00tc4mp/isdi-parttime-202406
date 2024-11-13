import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const { authorization } = req.headers;

    const { id } = jwt.verify(authorization.split(" ")[1], process.env.JWT_SECRET)

    const { username } = req.body

    try {
        logic.updateUsername(Number(id), username);

        res.status(200).send();
    } catch (error) {
        next(error)
    }
}
