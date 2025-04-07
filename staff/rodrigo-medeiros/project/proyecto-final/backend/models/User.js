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
      from: {
        iata_code: { type: String, required: true },
        longitude: { type: Number, required: true },
        region: { type: String, required: false },
        time_offset: { type: String, required: true },
        country: { type: String, required: true },
        name: { type: String, required: true },
        iso_country: { type: String, required: true },
        latitude: { type: Number, required: true },
        city: { type: String, required: true },
        timezone: { type: String, required: true },
      },
      to: {
        iata_code: { type: String, required: true },
        longitude: { type: Number, required: true },
        region: { type: String, required: false },
        time_offset: { type: String, required: true },
        country: { type: String, required: true },
        name: { type: String, required: true },
        iso_country: { type: String, required: true },
        latitude: { type: Number, required: true },
        city: { type: String, required: true },
        timezone: { type: String, required: true },
      },
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
