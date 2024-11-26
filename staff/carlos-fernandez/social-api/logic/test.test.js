import models from "../data/models.js";
import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.MONGO_URI_TEST, {}).then(() => {
  models.User.create({
    username: "testuser",
    email: "oldemail@example.com",
    dateOfBirth: new Date("01/01/2000"),
    password: "hashedpassword",
  }).then((user) => {
    console.log(user);
  });
});
