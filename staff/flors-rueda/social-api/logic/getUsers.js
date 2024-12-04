import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (id, searchParams) => {
    Validator.id(id);

    return User.findById(id)
        .then(user => {
            if (!user) throw new Errors.AuthError("User id don't belong to anyone");
            return User.aggregate([
                {
                    $match: { username: { $regex: searchParams, $options: 'i' } }
                },
                { $skip: 7 }
            ])
                .then((users) => {
                    const foundUsers = users.filter(user => id !== user._id.toString());
                    return foundUsers.map(user => {
                        user.id = user._id.toString();
                        delete user._id
                        return user;
                    });
                })
        })
}