import mongoose from "mongoose";

// Definindo o esquema de usuário
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3 },
  dateOfBirth: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Criação do modelo baseado no esquema
const User = mongoose.model("User", UserSchema);
export default User;
