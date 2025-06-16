import * as Errors from "../errors/errors.js"; // Personaliza tu error según sea necesario

export const createUserRequest = async (body) => {
  const { email, username, password, repeatPassword } = body;
  // Validaciones
  if (!email?.trim() || !username?.trim() || !password?.trim() || !repeatPassword?.trim()) {
    throw new Errors.BadRequestError("Faltan campos obligatorios.");
  }

  // Validación de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Errors.EmailNotValidError("El email no es válido.");
  }

  return { email, username, password, repeatPassword };
};

export const updateUserRequest = async (body) => {
  const { email, username, password } = body;

  // Validaciones
  if (!email || !username || !password) {
    throw new Errors.BadRequestError("Faltan campos obligatorios.");
  }

  if (email.trim() === "") {
    throw new Errors.BadRequestError("El email no puede estar vacío");
  }

  // Validación de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Errors.EmailNotValidError("El email no es válido.");
  }

  return { email, username, password };
};
