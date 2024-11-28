import mongoose from "mongoose"

const { Schema, Types } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
})

const User = mongoose.model('User', UserSchema)

export default {
    User
}