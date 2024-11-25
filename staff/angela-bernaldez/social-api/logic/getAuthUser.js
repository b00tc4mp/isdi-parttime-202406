import { Errors } from "social-common"
import data from "../data/index.js";
import { ObjectId } from "mongodb";

export default (id) => {
    //TODO: Validar id

    return data.users.findOne({ _id: new ObjectId(id) })
    .then((user) => {
        if (!user) throw new Errors.AuthError("User id don't belong to anyone");
        return user.username;
    })
    .catch((error) => { throw new Errors.UnexpectedError(error.message) })
};




