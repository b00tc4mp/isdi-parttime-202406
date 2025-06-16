import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User } = models;

export default (loggedUserId, usernameToFollow) => {
  Validator.id(loggedUserId);
  Validator.username(usernameToFollow);

  return User.findById(loggedUserId).then((loggedUser) => {
    if (!loggedUser)
      throw new Errors.ExistenceError("User with this id doesn't exist");
    return User.findOne({ username: usernameToFollow }).then((userToFollow) => {
      if (!userToFollow)
        throw new Errors.ExistenceError(
          "User with this username doesn't exist"
        );
      const index = loggedUser.following.indexOf(userToFollow._id);
      if (index === -1) {
        loggedUser.following.push(userToFollow._id);
        userToFollow.followers.push(loggedUser._id);
      } else {
        loggedUser.following.splice(index, 1);
        const indexFollower = userToFollow.followers.indexOf(loggedUser._id);
        userToFollow.followers.splice(indexFollower, 1);
      }

      loggedUser.save();
      userToFollow.save();
    });
  });
};
