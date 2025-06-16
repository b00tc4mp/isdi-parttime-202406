import { AuthError } from "social-common/errors";
import models from "../data/models";
import { Errors,Validator } from "social-common";


const {User} = models

export default (id,Bio)=>{
    Validator.id(id)
    Validator.Bio(Bio)


}

return User.findByIdAndUpdate((id,{Bio:Bio})
    .then((user)=>{
        if(!user) throw new AuthError ("This User does not have an ID")
    }
    )
)






