import { useState } from "react";
import { getPageRankingService } from "../api/pageRankingService";

const usePageRanking = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPageRanking = async (word) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getPageRankingService(word);
      setData(response.data);
    } catch (error) {
      console.error("Error generating page ranks:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getPageRanking };
};

export default usePageRanking;
