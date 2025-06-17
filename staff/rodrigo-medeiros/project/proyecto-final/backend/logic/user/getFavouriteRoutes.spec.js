import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";

import User from "../../models/User.js";
import { getFavouriteRoutesService } from "./getFavouriteRoutes.js";
import { NotFoundError, ServerError } from "../../tools/errors.js";

chai.use(chaiAsPromised);
const { expect } = chai;

// Garante que .env.test será carregado corretamente
dotenv.config({ path: path.resolve("backend/.env.test") });

describe("logic/user/getFavouriteRoutesService", function () {
  this.timeout(20000);

  before(async function () {
    const uri = process.env.MONGO_URI_TEST;
    if (!uri) throw new Error("MONGO_URI_TEST is not defined in .env.test");
    console.log(`Connecting to MongoDB Atlas at ${uri}`);
    try {
      await mongoose.connect(uri);
    } catch (error) {
      console.error("Failed to connect to MongoDB Atlas:", error);
      throw error;
    }
  });

  after(async function () {
    await mongoose.disconnect();
  });

  beforeEach(async function () {
    await User.deleteMany();
  });

  afterEach(async function () {
    await User.deleteMany();
  });

  it("throws NotFoundError if user does not exist", async function () {
    await expect(
      getFavouriteRoutesService("000000000000000000000000")
    ).to.be.rejectedWith(NotFoundError);
  });

  it("returns favouriteRoutes when user exists", async function () {
    const testUser = new User({
      username: "testuser",
      email: "testuser@example.com",
      password: "Test1234!",
      favouriteRoutes: [
        {
          from: {
            iata_code: "JFK",
            longitude: -73.7781,
            region: "NA",
            time_offset: "-5",
            country: "USA",
            name: "John F Kennedy Intl",
            iso_country: "US",
            latitude: 40.6413,
            city: "New York",
            timezone: "America/New_York",
          },
          to: {
            iata_code: "LAX",
            longitude: -118.4085,
            region: "NA",
            time_offset: "-8",
            country: "USA",
            name: "Los Angeles Intl",
            iso_country: "US",
            latitude: 33.9416,
            city: "Los Angeles",
            timezone: "America/Los_Angeles",
          },
          departureDate: "2025-06-01",
          returnDate: "2025-06-15",
          adults: 1,
          children: 0,
          cabinClass: "ECONOMY",
        },
      ],
    });

    await testUser.save();

    const routes = await getFavouriteRoutesService(testUser._id.toString());

    expect(routes).to.be.an("array");
    expect(routes).to.have.lengthOf(1);
    expect(routes[0].from.iata_code).to.equal("JFK");
    expect(routes[0].to.iata_code).to.equal("LAX");
  });

  it("throws ServerError if DB read fails", async function () {
    const user = new User({
      username: "failtest",
      email: "fail@test.com",
      password: "Senha1234!",
    });
    await user.save();

    await mongoose.disconnect(); // simula falha

    await expect(
      getFavouriteRoutesService(user._id.toString())
    ).to.be.rejectedWith(ServerError);

    await mongoose.connect(process.env.MONGO_URI_TEST); // reconecta para cleanup
  });
});
