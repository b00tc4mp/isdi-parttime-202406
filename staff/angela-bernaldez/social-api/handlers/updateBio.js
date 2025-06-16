import logic from "../logic/index.js"

export default (req, res, next) => {

    const id = req.id;
    const { bio } = req.body

    try {
        logic.updateBio(id, bio)
            .then(() => {
                res.status(200).send()
            })
            .catch(error => next(error))


    } catch (error) {
        next(error)
    }
}