import * as Errors from "../../errors";

const getEmerContByUser = async (userId) => {
    try {
        const response = await fetch(`/api/emergency-contacts/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
          },
        })
        if (!response.ok) {
            throw new Errors.ApiError("Error fetching emergency contacts", response.status);
        }
     return await response.json(); // Devuelve la respuesta JSON si fue exitosa
   } catch (err) {
     if (err instanceof TypeError) {
       throw new Errors.ServerError("Server is not connected");
     }
     throw new Errors.UnexpectedError(err.message || "Unexpected error occurred");
   }
 };

 export default getEmerContByUser;