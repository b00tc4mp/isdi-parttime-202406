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
      type: String,
      ref: "user",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      // esto crea una fecha automática para cuándo se ha creado
    },
    images: {
      type: [String],
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
