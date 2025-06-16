import jwt from "jsonwebtoken"

export default (req, res, next) => {
    const token = req.headers.authorization;

    const { userId } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    req.id = userId;

    next()
}