import { Errors } from "social-common";
import logic from "../logic/index.js"

export default (req, res, next) => {
    const { username, 'date-of-birth': dateOfBirth, email, password } = req.body

    console.log('hola1')

    try {
        logic.registerUser(username, dateOfBirth, email, password);

        res.status(201).send();
    } catch (error) {
        if (error.message === "Username already in use" || error.message === "Email already in use") {
            res.status(409).send(error.message)
        } else {
            res.status(418).send(error.message)
        }
        console.log('hola2', error instanceof Errors.EmailNotValidError)
        next(error)
    }
}

