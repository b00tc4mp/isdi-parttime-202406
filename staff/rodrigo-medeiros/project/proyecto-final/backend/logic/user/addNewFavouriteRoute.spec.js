// addNewFavouriteRoute.spec.js
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import User from "../../models/User.js";
import { addNewFavouriteRoute } from "./addNewFavouriteRoute.js";

const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

before(function (done) {
  this.timeout(10000);
  mongoose
    .connect(process.env.MONGO_URI_TEST)
    .then(() => done())
    .catch((err) => done(err));
});
afterEach(() => User.deleteMany());
after(() => mongoose.disconnect());

describe("addNewFavouriteRoute", () => {
  let user;

  beforeEach(async () => {
    user = await User.create({
      username: "TestUser",
      email: "test@mail.com",
      password: "password123",
      favouriteRoutes: [],
    });
  });

  it("should add a favourite route successfully", async () => {
    const req = {
      body: {
        from: "NYC",
        to: "LAX",
        departureDate: "2025-06-01",
        returnDate: "2025-06-10",
        adults: 1,
        children: 0,
        cabinClass: "Economy",
      },
      user: { id: user._id },
    };
    const res = {
      json(output) {
        this.output = output;
      },
      status(code) {
        this.statusCode = code;
        return this;
      },
    };

    await addNewFavouriteRoute(req, res);
    const updatedUser = await User.findById(user._id);
    expect(updatedUser.favouriteRoutes).to.have.lengthOf(1);
    expect(res.statusCode).to.equal(201);
  });
});
