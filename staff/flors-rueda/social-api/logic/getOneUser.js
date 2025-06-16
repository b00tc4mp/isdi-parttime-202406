import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, username) => {
    Validator.id(id);
    Validator.username(username);

    return User.findById(id)
        .then((user) => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return User.findOne({ username: username }, 'username avatar bio dateOfBirth').lean()
                .then(user => {
                    user.id = user._id.toString();
                    delete user._id;
                    return user
                })
        })
};
