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

export default {
  User,
};
