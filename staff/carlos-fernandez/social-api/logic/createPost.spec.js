import "dotenv/config";
import createPost from "./createPost.js";
import { describe, it } from "mocha";
import models from "../data/models.js";
import mongoose from "mongoose";
import { expect } from "chai";

const { User, Post } = models;

describe("createPost", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));
  afterEach(() => {
    return User.deleteMany().then(() => {
      return Post.deleteMany();
    });
  });

  it("creates post", () => {
    const user = {
      username: "testeo",
      dateOfBirth: new Date("07/20/1995"),
      email: "nombre@mail.com",
      password: "password",
    };
    return User.create(user).then((user) => {
      const id = user._id.toString();
      return createPost(id, "primer post", undefined, "private").then(() => {
        return Post.find().then((posts) => {
          const post = posts[0];
          const creationTime = post.createdAt.toLocaleDateString("en-EN");

          expect(posts.length).to.equal(1);
          expect(post.author).to.deep.equal(user._id);
          expect(post.content).to.equal("primer post");
          expect(creationTime).to.equal(new Date().toLocaleDateString("en-EN"));
          expect(post.visibility).to.equal("private");
        });
      });
    });
  });
});
