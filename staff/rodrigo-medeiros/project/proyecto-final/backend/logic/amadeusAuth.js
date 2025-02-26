import axios from "axios";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Amadeus token endpoint
const AMADEUS_TOKEN_URL =
  "https://test.api.amadeus.com/v1/security/oauth2/token";

// Get Amadeus credentials from environment variables
const CLIENT_ID = process.env.AMADEUS_CLIENT_ID;
const CLIENT_SECRET = process.env.AMADEUS_CLIENT_SECRET;

const getAmadeusToken = async () => {
  try {
    // Prepare the request body
    const data = new URLSearchParams();
    data.append("grant_type", "client_credentials");
    data.append("client_id", CLIENT_ID);
    data.append("client_secret", CLIENT_SECRET);

    // Make a POST request to get the access token
    const response = await axios.post(AMADEUS_TOKEN_URL, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("🔑 Token obtido:", response.data.access_token);

    // Return the access token
    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error fetching Amadeus token:",
      error.response?.data || error.message
    );
    throw new Error("Failed to fetch Amadeus token");
  }
};

export default getAmadeusToken;
