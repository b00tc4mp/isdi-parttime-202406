import * as Errors from "../../errors";

const updateEventById = async (eventName, startDateTime, duration, color, eventId) => {
    try {
      const response = await fetch(`/api/events/${eventId}}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
        },
        body: JSON.stringify({ eventName, startDateTime, duration, color }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Errors.ApiError(errorData.message);
      }

    return await response.json(); // Devuelve la respuesta JSON si fue exitosa
  } catch (err) {
    if (err instanceof TypeError) {
      throw new Errors.ServerError("Server is not connected");
    }
    throw new Errors.UnexpectedError(err.message || "Unexpected error occurred");
  }
};
  
export default updateEventById;