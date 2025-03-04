import { useState } from "react";
import { getSpellChecking } from "../api/spellChecking";

const useSpellChecker = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getSpellChekcer = async (word) => {
    setLoading(true);
    setError(null);

    try {
      const response = await getSpellChecking(word);
      setData(response.data.suggestedWords);
    } catch (error) {
      console.error("Error checking spelling:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, getSpellChekcer };
};

export default useSpellChecker;
