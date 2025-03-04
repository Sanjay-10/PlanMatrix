// src/api/api.js
import axios from "axios";

// Example base URL
const BASE_URL = "http://localhost:8080/api";

// Define your data fetch methods here
export const getBestPlans = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/best-plans`);
    return response; // Assuming the API returns the data in the desired format
  } catch (error) {
    console.error("Error fetching best sim plans:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};
