import "dotenv/config";
import toggleFollow from "./toggleFollow.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { User } = models;

describe("toggleFollow", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  it("", () => {
    const user = {
      username: "TestName",
      dateOfBirth: new Date("01/01/2000"),
      email: "name@email.com",
      password: "cryptPassword",
    };
    const user2 = {
      username: "TestName2",
      dateOfBirth: new Date("02/02/2000"),
      email: "name2@email.com",
      password: "cryptPassword2",
    };

    return User.create(user).then((loggeduser) => {
      const loggedUserId = loggedUser._id.toString();

      return User.create(user2).then((userToFollow) => {
        const usernameToFollow = userToFollow.username;
        const idToFollow = userToFollow._id;
        toggleFollow(loggedUserId, usernameToFollow).then(() => {
          return User.findById(loggedUserId).then((userUpdated) => {
            expect(userUpdated.following.length).to.not.equal(0);
            expect(userUpdated.following.includes(idToFollow)).to.be.true;
            return User.findById(idToFollow).then((userToFollowUpdated) => {
              expect(userToFollowUpdated.followers.length).to.not.equal(0);
              expect(userToFollowUpdated.followers.includes(loggedUserId)).to.be
                .true;
            });
          });
        });
      });
    });
  });
});
