export const handleAddToFavourites = async (routeData) => {
  console.log("handleAddToFavourites called with routeData:", routeData); // Test

  const token = sessionStorage.getItem("authToken");

  if (!token) {
    console.log("Token not found, redirecting to login.");
    return;
  }

  console.log("Token found:", token); // Verifying if the token was correctly retrieved

  try {
    console.log("Sending request to API...");

    const response = await fetch(
      "http://localhost:5000/api/user/favouriteRoutes",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(routeData), // Pass the entire routeData object
      }
    );

    console.log("Response received from API:", response.status); // Test
    if (!response.ok) throw new Error(await response.text());

    console.log("Route added to favourites successfully!");
    return await response.json();
  } catch (error) {
    console.error("Error adding route to favourites:", error);
    throw error;
  }
};
