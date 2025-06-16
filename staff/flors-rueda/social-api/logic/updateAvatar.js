import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, avatar) => {
    Validator.id(id);
    Validator.img(avatar);

    return User.findByIdAndUpdate(id, { avatar: avatar })
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
        })
}