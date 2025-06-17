// backend/logic/user/deleteFavouriteRoute.spec.js
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";

import User from "../../models/User.js";
import { deleteFavouriteRoute } from "./deleteFavouriteRoute.js";
import { BadRequestError, NotFoundError } from "../../tools/errors.js";

chai.use(chaiAsPromised);
const { expect } = chai;

// Carrega variáveis de ambiente de teste
dotenv.config({ path: path.resolve(process.cwd(), "backend/.env.test") });

describe("logic/user/deleteFavouriteRoute", function () {
  this.timeout(10000);

  // Conecta ao MongoDB de teste antes de toda a suíte
  before(function (done) {
    mongoose
      .connect(process.env.MONGO_URI_TEST)
      .then(() => done())
      .catch(done);
  });

  // Limpa os usuários após cada teste
  afterEach(async () => {
    await User.deleteMany();
  });

  // Desconecta ao final de todos os testes
  after(async () => {
    await mongoose.disconnect();
  });

  let user;
  // Exemplo completo de rota de teste
  const sampleRoute = {
    from: {
      iata_code: "NYC",
      name: "New York John F Kennedy Intl",
      city: "New York",
      country: "United States",
      iso_country: "US",
      latitude: 40.6413,
      longitude: -73.7781,
      timezone: "America/New_York",
      time_offset: "-05:00",
    },
    to: {
      iata_code: "LAX",
      name: "Los Angeles Intl",
      city: "Los Angeles",
      country: "United States",
      iso_country: "US",
      latitude: 33.9416,
      longitude: -118.4085,
      timezone: "America/Los_Angeles",
      time_offset: "-08:00",
    },
    departureDate: "2025-06-01",
    returnDate: "2025-06-10",
    adults: 1,
    children: 0,
    cabinClass: "Economy",
  };

  // Cria um usuário com uma rota favorita antes de cada teste
  beforeEach(async () => {
    user = await User.create({
      username: "TestUser",
      email: "test@mail.com",
      password: "hashedpassword",
      favouriteRoutes: [sampleRoute],
    });
  });

  it("should delete an existing favourite route successfully", async () => {
    // Obtém o ID da rota criada
    const routeId = user.favouriteRoutes[0]._id.toString();

    // Executa a lógica de deleção
    const updated = await deleteFavouriteRoute(user._id.toString(), routeId);

    // Verifica retorno da função
    expect(updated).to.be.an("array").with.lengthOf(0);

    // Verifica no banco de dados
    const freshUser = await User.findById(user._id);
    expect(freshUser.favouriteRoutes).to.have.lengthOf(0);
  });

  it("should throw BadRequestError for invalid route ID", async () => {
    // Tenta remover com ID inválido
    await expect(
      deleteFavouriteRoute(user._id.toString(), "not-a-valid-id")
    ).to.be.rejectedWith(BadRequestError, "Invalid route ID.");
  });

  it("should throw NotFoundError if user does not exist", async () => {
    // Gera um userId inexistente
    const fakeUserId = new mongoose.Types.ObjectId().toHexString();
    const realRouteId = user.favouriteRoutes[0]._id.toString();

    await expect(
      deleteFavouriteRoute(fakeUserId, realRouteId)
    ).to.be.rejectedWith(NotFoundError, "User not found.");
  });

  it("should throw NotFoundError if favourite route not found", async () => {
    // Gera um routeId que não pertence ao usuário
    const otherRouteId = new mongoose.Types.ObjectId().toHexString();

    await expect(
      deleteFavouriteRoute(user._id.toString(), otherRouteId)
    ).to.be.rejectedWith(NotFoundError, "Favourite route not found.");
  });
});
