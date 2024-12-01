import mongoose from "mongoose";
import models from "../models.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import { users, posts } from "./data.js";

const { User, Post } = models;

const generateUsers = () => {
  return bcrypt.hash("123456789", 15).then((cryptPassword) => {
    users.forEach((user) => (user.password = cryptPassword));
    return users.forEach((user) => {
      User.create(user).then((user) => {
        console.log(user.username, "created");
      });
    });
  });
};

const generatePost = (post) => {
  const randomUser = users[Math.floor(Math.random() * users.length)];
  return User.findOne({ username: randomUser.username }).then((user) => {
    if (!user) return generatePost(post);
    post.author = user._id;
    return Post.create(post);
  });
};

const generatePosts = () => {
  return posts.forEach((post) => {
    generatePost(post).then((post) => {
      console.log(post._id.toString(), "created");
    });
  });
};

mongoose.connect(process.env.MONGO_URI).then(() => {
  User.deleteMany().then(() => {
    Post.deleteMany().then(() => {
      generateUsers().then(() => {
        generatePosts();
      });
    });
  });
});
