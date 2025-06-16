import mongoose from "mongoose";
import { describe, it, before, afterEach, after } from "mocha";
import { expect } from "chai";
import * as service from "./contactService.js";
import EmergencyContact from "../models/contacts.js";
import "dotenv/config";

describe("Contact Service Tests", () => {
  before(() => mongoose.connect(process.env.MONGO_URI_TEST));

  afterEach(async () => {
    await EmergencyContact.deleteMany();
  });

  after(() => mongoose.disconnect());

  // -------------------------------
  // createContact
  // -------------------------------
  describe("createContact", () => {
    it("crea un contacto exitosamente", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contactData = {
        contactName: "John Doe",
        phone: "+34654321123",
      };

      const result = await service.createContact(user, contactData);
      expect(result).to.have.property("contactName", "John Doe");
      expect(result).to.have.property("phone", "+34654321123");
      expect(result.user.toString()).to.equal(user._id.toString());
    });

    it("lanza DuplicityError si el contacto ya existe", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contactData = {
        contactName: "John Doe",
        phone: "+34654321123",
      };
      let result;
      try {
        await service.createContact(user, contactData);
        result = await service.createContact(user, contactData);
      } catch (error) {
        expect(result).to.be.undefined;
        expect(error.message).to.be.equal("El contacto ya existe");
      }
    });

    it("crea un contacto exitosamente", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contactData = {
        contactName: "John Doe",
        phone: "+34654321123",
      };

      try {
        await service.createContact("", contactData);
      } catch (error) {
        expect(error.message).to.equal("Los campos no pueden estar vacíos");
      }
    });
  });

  // -------------------------------
  // getContacts
  // -------------------------------
  describe("getContacts", () => {
    it("retorna todos los contactos", async () => {
      await EmergencyContact.create([
        {
          contactName: "John Doe",
          phone: "+34612345678",
          user: new mongoose.Types.ObjectId(),
        },
        {
          contactName: "Jane Doe",
          phone: "+34798765432",
          user: new mongoose.Types.ObjectId(),
        },
      ]);

      const result = await service.getContacts();
      result.sort((a, b) => a.contactName.localeCompare(b.contactName));
      expect(result).to.be.an("array").with.length(2);
      expect(result[0]).to.have.property("contactName", "Jane Doe");
      expect(result[0]).to.have.property("phone", "+34798765432");
      expect(result[1]).to.have.property("contactName", "John Doe");
      expect(result[1]).to.have.property("phone", "+34612345678");
    });

    it("lanza NotFoundError si no hay contactos", async () => {
      try {
        await service.getContacts();
      } catch (error) {
        expect(error.message).to.equal(
          "No se encontraron contactos de emergencia"
        );
      }
    });
  });

  // -------------------------------
  // deleteContactById
  // -------------------------------
  describe("deleteContactById", () => {
    it("elimina un contacto exitosamente", async () => {
      const contact = await EmergencyContact.create({
        contactName: "John Doe",
        phone: "+34811223344",
        user: new mongoose.Types.ObjectId(),
      });

      const result = await service.deleteContactById(contact._id);
      expect(result).to.have.property("contactName", contact.contactName);
      expect(result).to.have.property("phone", contact.phone);

      const found = await EmergencyContact.findById(contact._id);
      expect(found).to.be.null;
    });

    it("lanza DeleteError si el contacto no existe", async () => {
      try {
        await service.deleteContactById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error.message).to.equal(
          "No se encontró el contacto de emergencia con el ID especificado"
        );
      }
    });

    it("lanza CastError si el ID es inválido", async () => {
      try {
        await service.deleteContactById("id-invalido");
      } catch (error) {
        expect(error.message).to.equal("ID inválido");
      }
    });
  });

  // -------------------------------
  // updateContactById
  // -------------------------------
  describe("updateContactById", () => {
    it("actualiza un contacto exitosamente", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34987654321",
      };
      const createdContact = await service.createContact(user, contact);
      const result = await service.updateContactById(createdContact._id, {
        contactName: "Jane Doe",
      });
      expect(result).to.have.property("contactName", "Jane Doe");
      expect(result).to.have.property("phone", contact.phone);
    });

    it("lanza UpdateError si el contacto no existe", async () => {
      try {
        await service.updateContactById(new mongoose.Types.ObjectId(), {
          contactName: "Jane Doe",
        });
      } catch (error) {
        expect(error.message).to.equal(
          "No se encontró el contacto de emergencia con el ID especificado"
        );
      }
    });

    it("CastError si el ID es inválido", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34987654321",
      };
      try {
        await service.createContact(user, contact);
        await service.updateContactById("", {
          contactName: "Jane Doe",
        });
      } catch (error) {
        expect(error.message).to.equal("ID de contacto inválido");
      }
    });
  });

  // -------------------------------
  // getContactById
  // -------------------------------
  describe("getContactById", () => {
    it("retorna un contacto por ID", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34654321123",
      };

      const createdContact = await service.createContact(user, contact);
      const result = await service.getContactById(createdContact._id);
      expect(result).to.have.property("contactName", contact.contactName);
    });

    it("CastError si el ID es inválido", async () => {
      const user = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34654321123",
      };

      try {
        await service.createContact(user, contact);
        await service.getContactById("");
      } catch (error) {
        expect(error.message).to.equal("ID de contacto inválido");
      }
    });

    it("lanza NotFoundError si el contacto no existe", async () => {
      try {
        await service.getContactById(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error.message).to.equal(
          "No se encontró el contacto de emergencia con el ID especificado"
        );
      }
    });
  });
  describe("getContactsByUserId", () => {
    it("retorna contactos de un usuario", async () => {
      const userId = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34654321123",
      };

      await service.createContact(userId, contact);

      const result = await service.getContactsByUserId(userId);
      expect(result).to.be.an("array").with.length(1);
      expect(result[0]).to.have.property("contactName", contact.contactName);
      expect(result[0]).to.have.property("phone", contact.phone);
    });

    it("lanza NotFoundError si no hay contactos para el usuario", async () => {
      try {
        await service.getContactsByUserId(new mongoose.Types.ObjectId());
      } catch (error) {
        expect(error.message).to.equal(
          "No se encontraron contactos de emergencia para el usuario con el ID especificado"
        );
      }
    });

    it("retorna contactos de un usuario", async () => {
      const userId = { _id: new mongoose.Types.ObjectId() };
      const contact = {
        contactName: "John Doe",
        phone: "+34654321123",
      };
      await service.createContact(userId, contact);
      try {
        await service.getContactsByUserId("");
      } catch (error) {
        expect(error.message).to.equal("ID de usuario inválido");
      }
    });
  });
});
