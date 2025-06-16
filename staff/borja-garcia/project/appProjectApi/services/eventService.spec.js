import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import * as service from "../services/eventService.js";
import Event from "../models/events.js";
import * as Errors from "../errors/errors.js";
import "dotenv/config";

describe("Event Service Tests", () => {
  before(async () => mongoose.connect(process.env.MONGO_URI_TEST));

  afterEach(async () => {
    await Event.deleteMany();
  });

  after(async () => mongoose.disconnect());

  // -------------------------------
  // createEvent
  // -------------------------------
  describe("createEvent", () => {
    it("crea un evento exitosamente", async () => {
      const userId = new mongoose.Types.ObjectId();
      const eventData = {
        eventName: "Reunión de trabajo",
        startDateTime: new Date(),
        category: "Otro",
        duration: 60,
        color: "#FF5733"
      };

      const createdEvent = await service.createEvent(eventData, userId);
      expect(createdEvent).to.have.property("eventName", "Reunión de trabajo");
      expect(createdEvent.user.toString()).to.equal(userId.toString());
      expect(createdEvent).to.have.property("duration", 60);
      expect(createdEvent).to.have.property("color", "#FF5733");
    });

    // it("lanza error al crear evento sin nombre", async () => {
    //   const userId = new mongoose.Types.ObjectId();
    //   const invalidEvent = {
    //     startDateTime: new Date(),
    //     category: "Otro"
    //   };

    //   try {
    //     await service.createEvent(invalidEvent, userId);
    //   } catch (error) {
    //     expect(error).to.be.instanceOf(Errors.ValidationError);
    //     expect(error.message).to.equal("Error al crear el evento");
    //   }
    // });

//     it("lanza error al crear evento con categoría inválida", async () => {
//       const userId = new mongoose.Types.ObjectId();
//       const invalidEvent = {
//         eventName: "Evento inválido",
//         startDateTime: new Date(),
//         category: "Categoría Inválida"
//       };

//       try {
//         await service.createEvent(invalidEvent, userId);
//       } catch (error) {
//         expect(error).to.be.instanceOf(Errors.ValidationError);
//         expect(error.message).to.equal("Error al crear el evento");
//       }
//     });

  });

  // -------------------------------
  // getEvents
  // -------------------------------
  describe("getEvents", () => {
    it("retorna todos los eventos", async () => {
      const userId = new mongoose.Types.ObjectId();
      await Event.insertMany([
        { 
          eventName: "Evento 1", 
          user: userId, 
          startDateTime: new Date(), 
          category: "Ansiedad" ,
        },
        { 
          eventName: "Evento 2", 
          user: userId, 
          startDateTime: new Date(), 
          category: "Ataque de Pánico" ,
        },
      ]);

      const result = await service.getEvents();
      expect(result).to.be.an("array").with.length(2);
      expect(result[0]).to.have.property("category", "Ansiedad");
    });

    it("lanza error si no hay eventos", async () => {
      try {
        await service.getEvents();
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.NotFoundError);
        expect(error.message).to.equal("No existen eventos");
      }
    });
  });

  // -------------------------------
  // deleteEventById
  // -------------------------------
  describe("deleteEventById", () => {
    it("elimina un evento exitosamente", async () => {
      const event = await Event.create({
        eventName: "Evento a eliminar",
        user: new mongoose.Types.ObjectId(),
        startDateTime: new Date(),
        category: "Otro"
      });

      const result = await service.deleteEventById(event._id);
      expect(result).to.have.property("_id").deep.equal(event._id);
    });

    it("lanza error si el evento no existe", async () => {
      try {
        await service.deleteEventById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.DeleteError);
        expect(error.message).to.equal("No se pudo eliminar el evento");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.deleteEventById("id-invalido");
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.CastError);
        expect(error.message).to.equal("ID de evento inválido");
      }
    });
  });

  // -------------------------------
  // updateEventById
  // -------------------------------
  describe("updateEventById", () => {
    it("actualiza un evento exitosamente", async () => {
      const event = await Event.create({
        eventName: "Evento Original",
        user: new mongoose.Types.ObjectId(),
        startDateTime: new Date(),
        category: "Otro"
      });

      const updated = await service.updateEventById(event._id, { 
        eventName: "Evento Actualizado",
        category: "Ansiedad"
      });
      expect(updated).to.have.property("eventName", "Evento Actualizado");
      expect(updated).to.have.property("category", "Ansiedad");
    });

    it("lanza error si el evento no existe", async () => {
      try {
        await service.updateEventById(new mongoose.Types.ObjectId(), { 
          eventName: "No existe" 
        });
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.UpdateError);
        expect(error.message).to.equal("No se pudo actualizar el evento");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.updateEventById("id-invalido", {});
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.CastError);
        expect(error.message).to.equal("ID de evento inválido");
      }
    });
  });

  // -------------------------------
  // getEventById
  // -------------------------------
  describe("getEventById", () => {
    it("retorna un evento por ID", async () => {
      const event = await Event.create({
        eventName: "Evento Específico",
        user: new mongoose.Types.ObjectId(),
        startDateTime: new Date(),
        category: "Autolesión"
      });

      const found = await service.getEventById(event._id);
      expect(found).to.have.property("_id").deep.equal(event._id);
      expect(found).to.have.property("category", "Autolesión");
    });

    it("lanza error si el evento no existe", async () => {
      try {
        await service.getEventById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.NotFoundError);
        expect(error.message).to.equal("No se encontró el evento");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.getEventById("id-invalido");
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.CastError);
        expect(error.message).to.equal("ID de evento inválido");
      }
    });
  });

  // -------------------------------
  // getEventsByUserId
  // -------------------------------
  describe("getEventsByUserId", () => {
    it("retorna eventos de un usuario", async () => {
      const userId = new mongoose.Types.ObjectId();
      await Event.create([
        { 
          eventName: "Evento 1", 
          user: userId, 
          startDateTime: new Date(), 
          category: "Ansiedad" 
        },
        { 
          eventName: "Evento 2", 
          user: userId, 
          startDateTime: new Date(), 
          category: "Ataque de Pánico" 
        }
      ]);

      const result = await service.getEventsByUserId(userId);
      expect(result).to.be.an("array").with.length(2);
      expect(result[0].user.toString()).to.equal(userId.toString());
    });

    it("lanza error si no hay eventos para el usuario", async () => {
      try {
        await service.getEventsByUserId(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.NotFoundError);
        expect(error.message).to.equal("No existen eventos para este usuario");
      }
    });

    it("lanza error si el ID es inválido", async () => {
      try {
        await service.getEventsByUserId("id-invalido");
      } catch (error) {
        expect(error).to.be.instanceOf(Errors.CastError);
        expect(error.message).to.equal("ID de usuario inválido");
      }
    });
  });
});