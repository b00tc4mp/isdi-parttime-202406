import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const { ObjectId } = Types;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    bio: {
        type: String,
        maxLength: 100
    },
    followers: [{
        type: ObjectId,
        ref: "User" //¡Esto va en String!
    }],
    following: [{
        type: ObjectId,
        ref: "User"
    }]
});

const User = mongoose.model('User', UserSchema);

const CommentSchema = new Schema({
    author: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    comment: {
        type: String,
        maxLength: 80,
    }
}, { timestamps: true })

const PostSchema = new Schema({
    author: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        maxLength: 120,
        minLength: 1,
        required: true,
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    images: [{
        type: String
    }],
    visibility: {
        type: String,
        enum: ["followers", "private", "public"],
        required: true
    },
    comments: [CommentSchema]
}, { timestamps: true })


const Post = mongoose.model('Post', PostSchema);

export default {
    User,
    Post
}