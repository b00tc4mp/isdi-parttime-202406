import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers
    const id = Number(authorization.split(" ")[1])

    console.log(id, 'íd')
    console.log(typeof id, 'tipo de id')

    try {
        const users = logic.getAllUsers(id);

        res.status(200).send(users);
    } catch (error) {
        // to propagate errors to the next middleware or to the global error handler.
        next(error)
    }
}


