import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, newEmail) => {
    Validator.email(newEmail);
    Validator.id(id);

    return User.findByIdAndUpdate(id, { email: newEmail })
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
        })

}