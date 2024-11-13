import logic from "../logic/index.js";

export default (req, res, next) => {
    const { authorization } = req.headers;
    const { idRequested } = req.params; //TODO: change to requested username

    const idLogged = Number(authorization.split(" ")[1]);

    try {
        const requestedUser = logic.getOneUser(idLogged, Number(idRequested));

        res.status(200).send(requestedUser);
    } catch (error) {
        next(error)
    }
};
