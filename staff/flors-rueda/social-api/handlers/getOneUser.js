import logic from "../logic/index.js";

export default (req, res, next) => {
    const { authorization } = req.headers;
    const { username } = req.params;

    const id = Number(authorization.split(" ")[1]);

    try {
        const requestedUser = logic.getOneUser(id, username);

        res.status(200).send(requestedUser);
    } catch (error) {
        next(error)
    }
};
