import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, bio) => {
    Validator.bio(bio);
    Validator.id(id);

    return User.findByIdAndUpdate(id, { bio: bio })
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
        })

}