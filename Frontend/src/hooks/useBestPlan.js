// src/hooks/useSimPlans.js
import { useState, useEffect } from "react";
import { getBestPlans } from "../api/bestPlanService";

// Define the hook
const useBestPlan = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBestPlans();
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

export default useBestPlan;
