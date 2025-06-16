import logic from "../logic/index.js";

export default (req, res, next) => {
    const id = req.id;

    const searchParams = req.params.search

    try {
        logic.getUsers(id, searchParams).then(users => {
            res.status(200).json({ users: users });
        }).catch(error => next(error));
    } catch (error) {
        next(error)
    }
};
