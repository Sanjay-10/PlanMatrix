import { useState, useEffect } from "react";
import { getWordCompletion } from "../api/wordCompletionService";

// Define the hook
const useWordCompleter = (word) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWordCompletion(word);
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [word]);

  return { data, error, loading };
};

export default useWordCompleter;
