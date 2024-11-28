import logic from "../logic/index.js";

export default (req, res, next) => {
    const id = req.id;

    try {
        const users = logic.getAllUsers(id);

        res.status(200).json({ users: users });
    } catch (error) {
        next(error)
    }
};
