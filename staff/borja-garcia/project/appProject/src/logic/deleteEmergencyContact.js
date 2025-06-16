import * as Errors from "../../errors";

const deleteEmergencyContactById = async (contactId) => {
  try {
    const response = await fetch(`/api/emergency-contacts/${contactId}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
      },
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

export default deleteEmergencyContactById;
