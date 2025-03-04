import { useState } from "react";
import { getFrequencyCountService } from "../api/frequencyCountService";

const useFrequencyCount = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFrequencyCount = async (word) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getFrequencyCountService(word);
      setData(response.data);
    } catch (error) {
      console.error("Error generating frequency count:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getFrequencyCount };
};

export default useFrequencyCount;
