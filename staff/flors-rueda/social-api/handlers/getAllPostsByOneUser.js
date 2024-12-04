import logic from "../logic/index.js";

export default (req, res, next) => {
    const id = req.id;

    const requestedUserId = req.params.id

    try {
        logic.getAllPostsByOneUser(id, requestedUserId)
            .then(posts => {
                res.status(200).json({ posts: posts })
            })
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}
