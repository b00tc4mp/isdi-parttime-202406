import logic from "../logic/index.js"

export default (req, res, next) => {
    const { username, 'date-of-birth': dateOfBirth, email, password } = req.body

    try {
        //SYNC PROCESS

        /*
            logic.registerUser(username, dateOfBirth, email, password);
    
            res.status(201).send();
        */

        //ASYNC PROCESS

        logic.registerUser(username, dateOfBirth, email, password)
            .then(() => res.status(201).send())
            .catch(error => next(error))


    } catch (error) {
        next(error)
    }
}
