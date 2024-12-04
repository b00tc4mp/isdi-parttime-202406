import logic from "../logic/index.js"

export default (req, res, next) => {
    const id = req.id;
    const postId = req.params.id
    const newPost = req.body

    try {
        logic.updatePost(id, postId, newPost)
            .then(() => {
                res.status(200).send();
            })
            .catch(error => next(error))
    } catch (error) {
        next(error)
    }
}
