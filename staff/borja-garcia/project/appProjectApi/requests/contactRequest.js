import * as Errors from "../errors/errors.js";

// Validación para crear un contacto de emergencia
export const createEmergencyContactRequest = async (body) => {
  const { contactName, phone, relationship } = body;

  // Validaciones
  if (!contactName?.trim() || !phone?.trim()) {
    throw new Errors.BadRequestError(
      "Faltan campos obligatorios: 'Nombre del contacto' y/o 'teléfono'."
    );
  }

  // Validación de formato para el teléfono (España)
  const phoneRegex = /^(\+34\s?|0034\s?|34\s?)?([6789]\d{8})$/;
  if (!phoneRegex.test(phone)) {
    throw new Errors.BadRequestError("El número de teléfono no es válido.");
  }

  // Validación de la relación (opcional, pero debe ser válida si se incluye)
  const validRelationships = [
    "Familiar",
    "Amigo",
    "Pareja",
    "Personal Médico",
    "Otro",
  ];
  if (relationship && !validRelationships.includes(relationship)) {
    throw new Errors.BadRequestError(
      `La relación no es válida. Debe ser una de: ${validRelationships.join(
        ", "
      )}.`
    );
  }

  // Retorno del objeto válido
  return {
    contactName,
    phone,
    relationship: relationship || "Otro",
  };
};

// Validación para actualizar un contacto de emergencia
export const updateEmergencyContactRequest = async (body) => {
    const { contactName, phone, relationship } = body;
  
    // Validaciones generales (asegurarse de que al menos un campo es proporcionado)
    if (!contactName && !phone && !relationship) {
      throw new Errors.BadRequestError("No se proporcionaron campos para actualizar.");
    }
  
    // Validación específica para cada campo
    if (contactName && contactName.length > 100) {
      throw new Errors.BadRequestError("El nombre del contacto no puede superar los 100 caracteres.");
    }
  
    if (phone) {
      const phoneRegex = /^(\+34\s?|0034\s?|34\s?)?([6789]\d{8})$/;
      if (!phoneRegex.test(phone)) {
        throw new Errors.BadRequestError("El número de teléfono no es válido.");
      }
    }
  
    if (relationship) {
      const validRelationships = ["Familiar", "Amigo", "Pareja", "Personal Médico", "Otro"];
      if (!validRelationships.includes(relationship)) {
        throw new Errors.BadRequestError(
          `La relación debe ser una de las siguientes: ${validRelationships.join(", ")}.`
        );
      }
    }
  
    // Devuelve solo los campos que están definidos y son válidos
    return {
      ...(contactName && { contactName: contactName.trim() }),
      ...(phone && { phone: phone.trim() }),
      ...(relationship && { relationship }),
    };
  };
