import logic from "../logic/index.js"

export default (req, res, next) => {
    const { authorization } = req.headers;

    const idLogged = Number(authorization.split(" ")[1]);
    const { 'old-password': oldPassword, 'new-password': newPassword } = req.body

    try {
        logic.updatePassword(idLogged, newPassword, oldPassword);

        res.status(200).send();
    } catch (error) {
        next(error)
    }
}
