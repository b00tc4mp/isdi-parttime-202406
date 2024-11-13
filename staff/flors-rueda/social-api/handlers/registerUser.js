import logic from "../logic/index.js"

export default (req, res, next) => {
    const { username, 'date-of-birth': dateOfBirth, email, password } = req.body

    try {
        logic.registerUser(username, dateOfBirth, email, password);

        res.status(201).send();
    } catch (error) {
        next(error)
    }
}
