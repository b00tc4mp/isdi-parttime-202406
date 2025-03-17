import mongoose from "mongoose";
import bcrypt from "bcrypt";

// Definindo o esquema de usuário
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3 },
  dateOfBirth: { type: String, default: "" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favouriteRoutes: [
    {
      from: { type: String, required: true },
      to: { type: String, required: true },
      departureDate: { type: String, required: true },
      returnDate: { type: String, required: false },
      adults: { type: Number, required: true },
      children: { type: Number, required: false, default: 0 },
      cabinClass: { type: String, required: true },
    },
  ],
});

// Método para comparar a senha fornecida com a armazenada no banco de dados
UserSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Criação do modelo baseado no esquema
const User = mongoose.model("User", UserSchema);

export default User;
