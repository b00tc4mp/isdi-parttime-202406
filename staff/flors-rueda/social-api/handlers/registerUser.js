import logic from "../logic/index.js"
// import Errors from "social-com"

export default (req, res) => {
    const { username, dateOfBirth, email, password } = req.body

    try {
        logic.registerUser(username, dateOfBirth, email, password);

        res.status(201).send();
    } catch (error) {
        // if(error.isntaceOf(Error.DuplicationError))
        if (error.message === "Username already in use" || error.message === "Email already in use") {
            res.status(409).send(error.message)
        } else {
            res.status(418).send(error.message)
        }
    }
}
