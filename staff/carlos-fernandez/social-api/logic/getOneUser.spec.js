import "dotenv/config";
import getOneUser from "./getOneUser.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { User } = models;

describe("get one user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => User.deleteMany());

  it("get user info", () => {
    const user1 = {
      username: "Nombre1",
      dateOfBirth: new Date("07/20/1995"),
      email: "nombre1@mail.com",
      password: "cryptPassword",
      avatar: "img.url/example.png",
      bio: `that's my bio1!`,
    };
    const user2 = {
      username: "Nombre2",
      dateOfBirth: new Date("07/20/1995"),
      email: "nombre2@mail.com",
      password: "cryptPassword",
      avatar: "img.url/example.png",
      bio: "thats my bio2!",
    };
    return User.create(user1).then((user) => {
      const id = user._id.toString();
      return User.create(user2).then(() => {
        return getOneUser(id, user2.username).then((userGot) => {
          expect(userGot.username).to.equal(user2.username);
          expect(userGot.dateOfBirth).to.deep.equal(user2.dateOfBirth);
          expect(userGot.email).to.equal(user2.email);
          expect(userGot.avatar).to.equal(user2.avatar);
          expect(userGot.bio).to.equal(user2.bio);
          expect(userGot._id).to.equal(undefined);
        });
      });
    });
  });
});
