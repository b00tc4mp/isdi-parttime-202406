import logic from "../logic/index.js";

export default (req, res, next) => {
    const postId = req.params.id

    const id = req.id;

    try {
        logic.getPost(id, postId)
            .then(post => res.status(200).send({ post: post }))
            .catch(error => next(error))

    } catch (error) {
        next(error)
    }
};
