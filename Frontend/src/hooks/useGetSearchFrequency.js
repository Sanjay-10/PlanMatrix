// src/hooks/useMobiles.js
import { useState, useEffect } from "react";
import { getSearchFrequencyService } from "../api/searchFrequencyService";

// Define the hook
const useGetSearchFrequency = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSearchFrequencyService();
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useGetSearchFrequency;
