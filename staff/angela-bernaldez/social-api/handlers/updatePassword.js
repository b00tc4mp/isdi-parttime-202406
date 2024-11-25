import logic from "../logic/index.js"

export default(req, res, next) => {

    const id = req.id

    const { 'old-password': oldPassword, 'new-password': newPassword } = req.body

    try {
        logic.updatePassword(Number(id), newPassword, oldPassword)

        res.status(200).send()
    } catch(error) {
        next(error)
    }
}