import logic from "../logic/index.js"
import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization;

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    const { 'old-password': oldPassword, 'new-password': newPassword } = req.body

    try {
        logic.updatePassword(Number(id), newPassword, oldPassword);

        res.status(200).send();
    } catch (error) {
        next(error)
    }
}
