import logic from "../logic/index.js";

export default (req, res, next) => {
    const { authorization } = req.headers;
    const id = Number(authorization.split(" ")[1]);

    try {
        const users = logic.getAllUsers(id);

        res.status(200).send(users);
    } catch (error) {
        next(error)
    }
};
