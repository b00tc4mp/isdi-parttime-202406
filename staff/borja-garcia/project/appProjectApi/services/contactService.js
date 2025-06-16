import EmergencyContact from "../models/contacts.js";
import * as Errors from "../errors/errors.js";
import mongoose from "mongoose";

export const createContact = async (user, contactData) => {
    try {
      const contact = new EmergencyContact({ ...contactData, user: user._id });
      await contact.save();
      return contact;
    } catch (error) {
      // Capturar error de duplicidad (código 11000 en MongoDB)
      if (error.code === 11000) {
        throw new Errors.DuplicityError("El contacto ya existe");
      }
      throw new Errors.BadRequestError("Los campos no pueden estar vacíos"); // Propagar otros errores
    
  };
};
export const getContacts = async () => {
  const contactsFound = await EmergencyContact.find();
  if (contactsFound.length === 0) {
    throw new Errors.NotFoundError("No se encontraron contactos de emergencia");
  }
  return contactsFound;
};

export const deleteContactById = async (id) => {
  try {
    const contactDeleted = await EmergencyContact.findByIdAndDelete(id);
    if (!contactDeleted) {
      throw new Errors.DeleteError(
        "No se encontró el contacto de emergencia con el ID especificado"
      );
    }
    return contactDeleted;
  } catch (error) {
    if (error.name === "CastError") {
      throw new Errors.CastError("ID inválido");
    }
    throw error;
  }
};

export const updateContactById = async (contactId, updatedContact) => {
  try {
    const contactUpdated = await EmergencyContact.findByIdAndUpdate(
      contactId,
      updatedContact,
      { new: true }
    );
    if (!contactUpdated) {
      throw new Errors.UpdateError(
        "No se encontró el contacto de emergencia con el ID especificado"
      );
    }
    return contactUpdated;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      throw new Errors.CastError("ID de contacto inválido");
    }
    throw error;
  }
};

export const getContactById = async (contactId) => {
  try {
    const foundContact = await EmergencyContact.findById(contactId);
    if (!foundContact) {
      throw new Errors.NotFoundError(
        "No se encontró el contacto de emergencia con el ID especificado"
      );
    }
    return foundContact;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      throw new Errors.CastError("ID de contacto inválido");
    }
    throw error;
  }
};

export const getContactsByUserId = async (userId) => {
  try {
    const foundContacts = await EmergencyContact.find({ user: userId });
    if (foundContacts.length === 0) { // Solo verificar longitud
      throw new Errors.NotFoundError(
        "No se encontraron contactos de emergencia para el usuario con el ID especificado"
      );
    }
    return foundContacts;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      throw new Errors.CastError("ID de usuario inválido");
    }
    throw error;
  }
};