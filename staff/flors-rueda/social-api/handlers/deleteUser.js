import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers;

    const idLogged = Number(authorization.split(" ")[1]);
    const { password } = req.body

    try {
        logic.deleteUser(idLogged, password);

        res.status(200).send();
    } catch (error) {
        next(error)
    }
}
