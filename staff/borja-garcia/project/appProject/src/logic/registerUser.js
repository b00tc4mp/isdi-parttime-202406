import * as Errors from "../../errors";

const createUser = async (username, email, password, repeatPassword) => {
  try {
    const response = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, email, password, repeatPassword }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Errors.ServerError(errorData.error || "Error al crear el usuario");
    }

    return await response.json(); // Devuelve la respuesta JSON si fue exitosa
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Errors.ServerError("Server is not connected");
    }
    throw new Errors.UnexpectedError(err.message || "Unexpected error occurred");
  }
};

export default createUser;
