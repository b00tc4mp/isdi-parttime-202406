import logic from "../logic/index.js"

export default (req, res, next) => {
    const id = req.id;
    const postId = req.params.id

    try {
        logic.deletePost(id, postId)
            .then(() => {
                res.status(200).send();
            }).catch(error => next(error))
    } catch (error) {
        next(error)
    }
}
