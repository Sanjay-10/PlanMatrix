// src/api/api.js
import axios from "axios";

// Example base URL
const BASE_URL = "http://localhost:8080/api";

// Define your data fetch methods here
export const getMobiles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/koodo-mobile-plans`);
    return response.data; // Assuming the API returns the data in the desired format
  } catch (error) {
    console.error("Error fetching mobile plans:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};

export const getSimPlans = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/koodo-sim-plans`);
    return response.data; // Assuming the API returns the data in the desired format
  } catch (error) {
    console.error("Error fetching SIM plans:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};
