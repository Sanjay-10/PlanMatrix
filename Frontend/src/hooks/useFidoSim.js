// src/hooks/useSimPlans.js
import { useState, useEffect } from "react";
import { getSimPlans } from "../api/fidoApiService";

// Define the hook
const useFidoSim = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSimPlans();
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

export default useFidoSim;
