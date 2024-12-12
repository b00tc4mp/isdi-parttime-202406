import mongoose from "mongoose";

const { Schema, Types } = mongoose;

const { ObjectId } = Types;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  nif: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dogs: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

const DogSchema = new Schema({
  dogName: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sociability: {
    type: Boolean,
    required: true,
  },
  disease: {
    type: String,
    required: true,
  },
  allergy: {
    type: String,
    required: true,
  },
});

const Dog = mongoose.model("Dog", DogSchema);

export default {
  User,
  Dog,
};
