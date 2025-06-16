import User from "../models/users.js";
import bcrypt from "bcrypt";
import * as Errors from "../errors/errors.js";
import mongoose from "mongoose";

export const createUser = async (userObject) => {
  try {
    // Comparar las contraseñas en texto plano antes de cifrarlas
    if (userObject.password !== userObject.repeatPassword) {
      throw new Errors.PasswordNotValidError("Las contraseñas no coinciden");
    }

    // Cifrar la contraseña solo después de la validación
    const hashedPwd = await bcrypt.hash(userObject.password, 10);

    // Crear el objeto userData con la contraseña cifrada
    const userData = {
      username: userObject.username.trim(),
      email: userObject.email.trim(),
      password: hashedPwd,
    };

    // Guardar el usuario en la base de datos
    const user = new User(userData);
    const savedUser = await user.save().catch(error => {
    if (error.code === 11000) {
      throw new Errors.DuplicityError("El nombre de usuario o el email ya existen");
    }
  });
    return savedUser; // Devuelve el usuario guardado en caso de éxito
  } catch (error) {
    // Maneja cualquier error durante el proceso
    throw new Errors.SaveError("Error al procesar el usuario: " + error.message);
  }
};

// Obtener todos los usuarios
export const getUsers = async () => {
  const usersFound = await User.find();
  if (!usersFound || usersFound.length === 0)
    throw new Errors.NotFoundError("No se han encontrado usuarios");
  return usersFound;
};

export const deleteUserById = async (userId) => {
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    if (!deleteUser)
      throw new Errors.DeleteError("No se ha podido eliminar el usuario");
    return deleteUser;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de usuario inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const updateUserById = async (userId, updatedUser) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(userId, updatedUser, {
      new: true,
    });
    if (!userUpdated)
      throw new Errors.UpdateError("No se ha podido actualizar el usuario");
    return userUpdated;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de usuario inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const getUserById = async (userId) => {
  try {
    const foundUser = await User.findById(userId);
    if (!foundUser)
      throw new Errors.NotFoundError("No se ha encontrado el usuario");
    return foundUser;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError)
      throw new Errors.CastError("ID de usuario inválido");
    // Si el error no es un CastError, lo lanzamos tal cual
    throw error;
  }
};

export const saveUserContact = async (user, contact) => {
  user.contacts = user.contacts || []; // Comprobar para que tenga sentido
  user.contacts.push(contact._id); // Asegúrate de que el esquema del usuario tenga el campo `contacts`
  const savedUser = await user.save();
  if (!savedUser)
    throw new Errors.SaveError(
      "No se ha podido vincular el contacto al usuario"
    );
  return savedUser;
};

export const saveUserEvent = async (user, event) => {
  user.events = user.events || []; // Comprobar para que tenga sentido
  user.events.push(event._id); // Asegúrate de que el esquema del usuario tenga el campo `contacts`
  const savedUser = await user.save();
  if (!savedUser)
    throw new Errors.SaveError("No se ha podido vincular el evento al usuario");
  return savedUser;
};

////////////// Gestión de autentificación y Contraseñas (cifrados) //////////////

export const authUser = async (email, pwd) => {
  const user = await User.findOne({ email });
  if (!user || !(await isPasswordValid(pwd, user.password)))
    throw new Errors.CredentialsError("Credenciales incorrectas");
  return user;
};

export const isPasswordValid = async (pwd, hashedPwd) => {
  return await bcrypt.compare(pwd, hashedPwd);
};
