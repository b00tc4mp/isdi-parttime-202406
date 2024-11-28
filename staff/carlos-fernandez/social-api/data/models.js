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
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
    maxLength: 100,
  },
});

/* TODO: POST: Crear el esquema
    ¿Qué incluye? ¿autor, contenido, fecha, comentarios?
    PISTA PARA AUTHOR: usar ref para poder usar populate
    https://mongoosejs.com/docs/populate.html
*/
const User = mongoose.model("User", UserSchema);

const PostsSchema = new Schema(
  {
    author: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      maxLength: 120,
      minLength: 1,
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    visibility: {
      type: String,
      enum: ["followers", "private", "public"],
      required: true,
    },
    comments: [{ type: ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostsSchema);

export default {
  User,
  Post,
};
