import { Errors, Validator } from "social-common";
import data from "../data/index.js";
import { ObjectId } from "mongodb";

export default (id, newUsername) => {
    Validator.username(newUsername);
    //todo add id validator

    return data.users.updateOne({ _id: new ObjectId(id) }, { $set: { username: newUsername } })
        .then((info) => {
            if (info.matchedCount !== 1) throw new Errors.AuthError("User id don't belong to anyone");
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}