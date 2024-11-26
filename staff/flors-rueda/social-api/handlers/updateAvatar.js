import logic from "../logic/index.js"

export default (req, res, next) => {

    const id = req.id;
    const { avatar } = req.body

    try {
        logic.updateAvatar(id, avatar)
            .then(() => {
                res.status(200).send();
            })
            .catch(error => next(error))


    } catch (error) {
        next(error)
    }
}
