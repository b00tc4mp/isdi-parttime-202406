import "dotenv/config";
import registerUser from "../registerUser.js";
import { describe, it } from "mocha";
import models from "../../data/models.js";
import mongoose, { Types } from "mongoose";
import { expect } from "chai";

const { User } = models;
const { ObjectId } = Types;

describe("Register user", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach((done) => {
    User.deleteMany()
      .then(() => {
        done();
      })
      .catch(done);
  });
  after(() => mongoose.disconnect(process.env.MONGO_URI_TEST));

  it("Creates a new user", () => {
    return registerUser(
      "Carlos",
      "Fernandez",
      "666666666",
      "38878569J",
      "carlos@gmail.com",
      "aaAA1234@",
      "aaAA1234@"
    ).then(() => {
      return User.findOne({ nif: "38878569J" }).then((user) => {
        expect(user.username).to.equal("Carlos");
        expect(user.surname).to.equal("Fernandez");
        expect(user.phoneNumber).to.equal("666666666");
        expect(user.nif).to.equal("38878569J");
        expect(user.email).to.equal("carlos@gmail.com");
        expect(user._id).to.be.instanceOf(ObjectId);
      });
    });
  });

  it("Fails when nif already exists", () => {
    return User.create({
      username: "Juan",
      surname: "Lopez",
      phoneNumber: "777777777",
      nif: "38878569J",
      email: "juan@gmail.com",
      password: "hashedpassword",
    }).then(() => {
      registerUser(
        "Carlos",
        "Palibez",
        "666333555",
        "38878569J",
        "carl@gmail.com",
        "hashedpassword"
      )
        .then(() => {})
        .catch((error) => {
          expect(error.message).to.equal("Nif already in use");
        });
    });
  });

  it("Fails when email already exists", () => {
    return User.create({
      username: "Juan",
      surname: "Lopez",
      phoneNumber: "777777777",
      nif: "38878569Z",
      email: "juan@gmail.com",
      password: "hashedpassword",
    }).then(() => {
      registerUser(
        "Carlos",
        "Martinez",
        "612345678",
        "38795701Z",
        "juan@gmail.com",
        "hashedpassword"
      )
        .then(() => {})
        .catch((error) => {
          expect(error.message).to.equal("Email already in use");
        });
    });
  });
});
