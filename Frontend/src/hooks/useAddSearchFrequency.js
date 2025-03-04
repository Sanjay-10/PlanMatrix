import { useState } from "react";
import { addSearchFrequencyService } from "../api/searchFrequencyService";

const useAddSearchFrequency = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addSearchFrequency = async (word) => {
    setLoading(true);
    setError(null);

    try {
      const response = await addSearchFrequencyService(word);
      setData(response.data);
    } catch (error) {
      console.error("Error generating search frequency:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, addSearchFrequency };
};

export default useAddSearchFrequency;
