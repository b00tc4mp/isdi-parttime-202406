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
      ref: "Dog",
    },
  ],
});

const User = mongoose.model("User", UserSchema);

const DogSchema = new Schema({
  owner: [
    {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  ],
  chip: {
    type: String,
    required: true,
  },
  dogName: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
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

const BookingSchema = new Schema({
  dogs: [
    {
      type: ObjectId,
      ref: "Dog",
    },
  ],
  owner: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Booking = mongoose.model("Booking", BookingSchema);

export default {
  User,
  Dog,
  Booking,
};
