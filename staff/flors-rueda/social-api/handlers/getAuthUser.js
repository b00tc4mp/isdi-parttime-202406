import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization;

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    try {
        const user = logic.getAuthUser(Number(id));

        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
}
