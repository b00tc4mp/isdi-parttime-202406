import { Errors, Validator } from "social-common";
import data from "../data/index.js";
import { ObjectId } from "mongodb";

export default (id, newUsername) => {
    Validator.username(newUsername);

    //TODO: UPDATES: Hacer / Migrar los updates a mongoose. Posibles metodos:
    // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()
    // https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()


    return data.users.updateOne({ _id: new ObjectId(id) }, { $set: { username: newUsername } })
        .then((info) => {
            if (info.matchedCount !== 1) throw new Errors.AuthError("User id don't belong to anyone");
        })
        .catch((error) => { throw new Errors.UnexpectedError(error.message) })
}