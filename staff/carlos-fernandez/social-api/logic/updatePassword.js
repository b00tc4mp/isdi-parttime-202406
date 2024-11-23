import { Errors, Validator } from "social-common";
import bcrypt from "bcrypt";

export default (id, newPassword, oldPassword) => {
  Validator.password(newPassword);
  Validator.password(oldPassword);
  /*
        return storage.getUsers()
            .then((users) => {
                const userIndex = users.findIndex(user => user.id === id);
                if (userIndex === -1) throw new Errors.ExistenceError('No user with this email');
    
    
                return bcrypt.compare(oldPassword, users[userIndex].password)
                    .then((isPasswordValid) => {
    
                        if (!isPasswordValid) throw new Errors.CredentialsError('Wrong Password');
    
                        return bcrypt.hash(newPassword, 15)
                            .then((cryptPassword) => {
    
                                users[userIndex].password = cryptPassword;
    
                                return storage.saveUsers(users);
                            }).catch((error) => { throw new Errors.UnexpectedError(error.message) })
                    }).catch((error) => { throw new Errors.UnexpectedError(error.message) })
            })*/
};
