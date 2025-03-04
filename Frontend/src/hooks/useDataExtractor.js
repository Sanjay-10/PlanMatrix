import { useState } from "react";
import { extractDataFromTextService } from "../api/extractDataFromTextService";

const useDataExtractor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const extract = async (file, domain) => {
    setLoading(true);
    setError(null);

    try {
      const result = await extractDataFromTextService(file, domain);
      setData(result);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { extract, loading, error, data };
};

export default useDataExtractor;
