import axios from "axios";

// Example base URL
const BASE_URL = "http://localhost:8080/api";

// Define your data fetch methods here
export const getSearchFrequencyService = async (word) => {
  try {
    const response = await axios.get(`${BASE_URL}/get-search-frequency`);
    return response; // API returns the data in the desired format
  } catch (error) {
    console.error("Error searching word:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};

// Define your data fetch methods here
export const addSearchFrequencyService = async (word) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-search-frequency`, {
      word: word,
    });
    return response; // API returns the data in the desired format
  } catch (error) {
    console.error("Error adding keyword:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};
