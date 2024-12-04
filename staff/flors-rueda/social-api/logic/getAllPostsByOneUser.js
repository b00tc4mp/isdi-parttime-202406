import { Errors, Validator } from "social-common";
import models from "../data/models.js";

const { User, Post } = models;

export default (id, requestedUserId) => {
    Validator.id(id);

    return User.findById(id)
        .then((user) => {
            return User.findById(requestedUserId)
                .then((requestedUser) => {
                    if (!requestedUser) throw new Errors.ExistenceError("user does not exist");

                    const conditions = [
                        { visibility: "public", author: requestedUserId }
                    ];

                    if (requestedUser.followers.includes(id)) {
                        conditions.push({ visibility: "followers", author: requestedUserId });
                    }

                    if (id === requestedUserId) {
                        conditions.push({ visibility: "private", author: requestedUserId });
                    }

                    return Post.find({ $or: conditions }, "author content likes images createdAt comments")
                        .populate("author", "username avatar")
                        .populate({ path: "comments", populate: { path: "author" } })
                        .sort({ createdAt: -1 })
                        .lean()
                        .then((posts) => {
                            return posts.map((post) => {
                                post.isLiked = post.likes.some((userId) => userId.toString() === id);

                                post.author.id = post.author.id ? post.author.id : post.author._id.toString();
                                delete post.author._id;

                                post.id = post._id.toString();
                                delete post._id;

                                post.author.isFollowed = user.following.includes(post.author.id);

                                if (post.comments.length > 0) {
                                    post.comments.map((comment) => {
                                        const cleanAuthor = {
                                            username: comment.author.username,
                                            avatar: comment.author.avatar,
                                            id: comment.author._id.toString(),
                                        };

                                        comment.author = cleanAuthor;

                                        comment.id = comment._id.toString();
                                        delete comment._id;
                                        delete comment.updatedAt;

                                        return comment;
                                    });
                                }

                                return post;
                            });
                        })
                        .catch((error) => {
                            throw new Errors.UnexpectedError(error.message);
                        });
                })

        });
};
