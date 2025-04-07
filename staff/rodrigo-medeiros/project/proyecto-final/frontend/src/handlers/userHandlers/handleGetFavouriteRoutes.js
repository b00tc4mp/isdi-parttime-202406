// handleGetFavouriteRoutes.js
export const handleGetFavouriteRoutes = async () => {
  console.log("handleGetFavouriteRoutes called"); // Test

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
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      }
    );

    console.log("Response received from API:", response.status); // Test
    if (!response.ok) throw new Error(await response.text());

    console.log("Favourite routes retrieved successfully!");
    return await response.json(); // Return the list of favourite routes
  } catch (error) {
    console.error("Error fetching favourite routes:", error);
    throw error; // Throw the error to be handled in the component
  }
};
