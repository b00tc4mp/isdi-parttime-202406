import logic from "../logic/index.js";

export default (req, res, next) => {
    const id = req.id;
    const { content, images, visibility } = req.body;

    try {
        logic.createPost(id, content, images, visibility)
            .then(() => res.status(201).send())
            .catch((error) => next(error))
    } catch (error) {
        next(error)
    }
}