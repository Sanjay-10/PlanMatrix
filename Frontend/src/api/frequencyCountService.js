import axios from "axios";

// Example base URL
const BASE_URL = "http://localhost:8080/api";

// Define your data fetch methods here
export const getFrequencyCountService = async (word) => {
  try {
    const response = await axios.post(`${BASE_URL}/frequency-count`, {
      word: word,
    });
    return response; // API returns the data in the desired format
  } catch (error) {
    console.error("Error generating frequency count:", error);
    throw error; // Re-throw the error to handle it in the hook or component
  }
};
