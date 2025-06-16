import * as Errors from "../../errors/";

const getEventsByUser = async () => {
  try {
    const token = sessionStorage.getItem("token");
    if (!token) {
      throw new Errors.BadRequestError("User not logged in");
    }
    const response = await fetch(`/api/events/users/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });

    if (!response.ok) {
      throw new Errors.BadRequestError(
        "Error fetching events",
        response.status
      );
    }
    
    return await response.json(); // Devuelve la respuesta JSON si fue exitosa
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Errors.ServerError("Server is not connected");
    }
    throw new Errors.UnexpectedError(
      err.message || "Unexpected error occurred"
    );
  }
};

export default getEventsByUser;
