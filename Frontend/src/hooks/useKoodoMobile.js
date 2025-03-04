// src/hooks/useMobiles.js
import { useState, useEffect } from "react";
import { getMobiles } from "../api/koodoApiService";

// Define the hook
const useKoodomMobiles = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMobiles();
        setData(result);
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

export default useKoodomMobiles;
