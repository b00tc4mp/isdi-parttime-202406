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
    }
});

const User = mongoose.model('User', UserSchema);

const PostSchema = new Schema({
    author: {
        type: ObjectId,
        ref: User,
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
        ref: User
    }],
    images: [{
        type: String
    }],
    visibility: {
        type: String,
        enum: ["followers", "private", "public"],
        required: true
    }
}, { timestamps: true })


const Post = mongoose.model('Post', PostSchema);

export default {
    User,
    Post
}