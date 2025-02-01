import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    const token = req.headers.authorization

    const { id } = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET)

    req.id = id

    next()
}

