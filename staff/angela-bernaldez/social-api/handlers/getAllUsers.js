import { Errors } from "social-common"
import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers
    const id = Number(authorization.split(" ")[1])

    console.log(id, 'íd')
    console.log(typeof id, 'tipo de id')

    try {
        const users = logic.getAllUsers(id);

        res.status(202).send(users);
    } catch (error) {
        if (error.message === "User doesn't exist") {
            res.status(401).send(error.message)
        } else {
            res.status(418).send(error.message)
        }
        // to propagate errors to the next middleware or to the global error handler.
        next(error)
    }
}


