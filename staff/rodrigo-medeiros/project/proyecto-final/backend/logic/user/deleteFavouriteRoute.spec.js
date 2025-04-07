// deleteFavouriteRoute.spec.js
import mongoose from "mongoose";
import { describe, it, before, beforeEach, afterEach, after } from "mocha";
import { expect } from "chai";
import User from "../../models/User.js";
import { deleteFavouriteRoute } from "./deleteFavouriteRoute.js"; // Ou deleteFavouriteRoute.js, conforme o teste
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import path from "path";

// Carregar o arquivo .env.test explicitamente
const envPath = path.resolve(".env.test");
dotenv.config({ path: envPath });

console.log("🚀 Arquivo .env.test carregado!");
console.log(
  "✅ MONGO_URI_TEST:",
  process.env.MONGO_URI_TEST || "❌ Não definida"
);

describe("deleteFavouriteRoute", function () {
  this.timeout(10000); // Aumenta o timeout para 10 segundos

  let user;

  before(async function () {
    this.timeout(10000); // Garante mais tempo para conectar
    try {
      await mongoose.connect(process.env.MONGO_URI_TEST);
      console.log("✅ Conectado ao MongoDB de teste");
    } catch (error) {
      console.error("🚨 Erro ao conectar ao MongoDB:", error);
    }
  });

  beforeEach(async function () {
    this.timeout(10000); // Mais tempo para criar o usuário
    try {
      const hashedPassword = await bcrypt.hash("testPassword", 10);
      user = await User.create({
        username: "TestUser",
        dateOfBirth: "1995-07-20",
        email: "testuser@mail.com",
        password: hashedPassword,
        favouriteRoutes: [
          {
            from: "NYC",
            to: "LAX",
            departureDate: "2025-06-01",
            returnDate: "2025-06-10",
            adults: 1,
            children: 0,
            cabinClass: "economy",
          },
        ],
      });
    } catch (error) {
      console.error("Erro ao criar usuário de teste:", error);
    }
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  it("should delete a favourite route successfully", async () => {
    const favouriteRouteId = user.favouriteRoutes[0]._id.toString(); // Converte para string

    const req = {
      user: { id: user._id.toString() }, // Converte user ID para string
      params: { routeId: favouriteRouteId },
    };

    // Mock da resposta
    const res = {
      statusCode: null,
      output: null,
      json: function (output) {
        this.output = output;
      },
      status: function (code) {
        this.statusCode = code;
        return this; // Retorna o próprio objeto para encadear os métodos
      },
    };

    await deleteFavouriteRoute(req, res);

    const updatedUser = await User.findById(user._id);
    expect(updatedUser.favouriteRoutes.length).to.equal(0); // Agora deve passar ✅
    expect(res.statusCode).to.equal(200); // Verifica se o código de status é 200
    expect(res.output.message).to.equal(
      "Favourite route successfully removed."
    ); // Verifica a mensagem correta
  });
});
