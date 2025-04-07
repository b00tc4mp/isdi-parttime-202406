export const handleDeleteFavouriteRoute = async (routeId) => {
  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token not found, redirecting to login.");
    return;
  }

  try {
    console.log("Sending DELETE request to API for routeId:", routeId);
    const response = await fetch(
      `http://localhost:5000/api/user/favouriteRoutes/${routeId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    console.log("Route deleted successfully!");
    // O backend retorna as rotas atualizadas
    return await response.json();
  } catch (error) {
    console.error("Error deleting favourite route:", error);
    throw error;
  }
};
