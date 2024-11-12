import { Errors } from "social-common";
import logic from "../logic/index.js"
// import Errors from "social-com"

export default (req, res, next) => {
    const { username, 'date-of-birth': dateOfBirth, email, password } = req.body

    console.log('hola1')

    try {
        logic.registerUser(username, dateOfBirth, email, password);

        res.status(201).send();
    } catch (error) {
        console.log('hola2', error instanceof Errors.EmailNotValidError)
        next(error)
    }
}
