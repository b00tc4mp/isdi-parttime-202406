import mongoose from "mongoose";
import models from "../models.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import { users } from "./data.js";

const { User } = models;

const generateUsers = () => {
  return bcrypt.hash("123456789", 15).then((cryptPassword) => {
    users.forEach((user) => user.password === cryptPassword);
    return users.forEach((user) => {
      User.create(user).then((user) => {
        console.log(user.username, "created");
      });
    });
  });
};

mongoose.connect(process.env.MONGO_URI).then(() => {
  User.deleteMany().then(() => {
    generateUsers();
  });
});
