import { AuthError } from "social-common/errors.js";
import models from "../data/models.js"
import { Errors,Validator } from "social-common"

const {User} = models

export default(id,Avatar)=>{
    Validator.id(id);
    Validator.Avatar(Avatar)

}

return User.findByIdAndUpdate(id,{Avatar:Avatar})
    .then((user)=>{
        if (!user) throw new AuthError("This Id does not belong to anyone")
    })