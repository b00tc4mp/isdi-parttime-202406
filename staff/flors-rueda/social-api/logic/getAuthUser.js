import { Errors } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id) => {

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return user.username;
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
};
