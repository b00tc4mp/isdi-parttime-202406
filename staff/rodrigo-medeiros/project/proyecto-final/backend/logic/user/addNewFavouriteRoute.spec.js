// backend/logic/user/AddNewFavouriteRoute.spec.js
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";

import User from "../../models/User.js";
import { AddNewFavouriteRoute } from "./addNewFavouriteRoute.js";
import { BadRequestError, NotFoundError } from "../../tools/errors.js";

chai.use(chaiAsPromised);
const { expect } = chai;

dotenv.config({ path: path.resolve(process.cwd(), "backend/.env.test") });

// Use function() here so we can call this.timeout(...)
describe("logic/user/AddNewFavouriteRoute", function () {
  // estende o timeout para toda a suite
  this.timeout(10000);

  before(function (done) {
    mongoose
      .connect(process.env.MONGO_URI_TEST)
      .then(() => done())
      .catch(done);
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  after(async () => {
    await mongoose.disconnect();
  });

  let user;

  // Exemplo completo com todos os campos exigidos pelo schema
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

  // Também usando function() para podermos ajustar o timeout se desejar individualmente
  beforeEach(async function () {
    user = await User.create({
      username: "TestUser",
      email: "test@mail.com",
      password: "hashedpassword",
      favouriteRoutes: [],
    });
  });

  it("adds a favourite route successfully", async () => {
    const updated = await AddNewFavouriteRoute(
      user._id.toString(),
      sampleRoute
    );

    expect(updated).to.be.an("array").with.lengthOf(1);
    expect(updated[0]).to.include({
      departureDate: sampleRoute.departureDate,
      returnDate: sampleRoute.returnDate,
      adults: sampleRoute.adults,
      children: sampleRoute.children,
      cabinClass: sampleRoute.cabinClass,
    });
    expect(updated[0].from).to.include(sampleRoute.from);
    expect(updated[0].to).to.include(sampleRoute.to);
  });

  it("throws NotFoundError if user does not exist", async () => {
    const fakeId = new mongoose.Types.ObjectId().toString();
    await expect(AddNewFavouriteRoute(fakeId, sampleRoute)).to.be.rejectedWith(
      NotFoundError,
      "User not found."
    );
  });

  it("throws BadRequestError when limit of 5 routes reached", async () => {
    // Pré-popula com 5 rotas completas e marca o campo como modificado
    user.favouriteRoutes = Array(5).fill(sampleRoute);
    user.markModified("favouriteRoutes");
    await user.save();

    await expect(
      AddNewFavouriteRoute(user._id.toString(), sampleRoute)
    ).to.be.rejectedWith(
      BadRequestError,
      "Limit of 5 favourite routes reached."
    );
  });

  it("throws BadRequestError when adding a duplicate route", async () => {
    // Adiciona a primeira rota
    await AddNewFavouriteRoute(user._id.toString(), sampleRoute);
    // Tenta adicionar a mesma rota novamente
    await expect(
      AddNewFavouriteRoute(user._id.toString(), sampleRoute)
    ).to.be.rejectedWith(
      BadRequestError,
      "This favourite route already exists."
    );
  });
});
